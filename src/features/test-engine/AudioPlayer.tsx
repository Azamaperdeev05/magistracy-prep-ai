import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Loader2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  src?: string;
  transcriptText?: string;
  onErrorStateChange?: (hasError: boolean) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, transcriptText, onErrorStateChange }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const synthUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [useTTS, setUseTTS] = useState(false);

  // Clean transcript for TTS engine
  const getCleanText = (text?: string): string => {
    if (!text) return "";
    return text
      .replace(/^Dialogue:\s*/gi, '')
      .replace(/^Transcript:\s*/gi, '')
      .replace(/Speaker \d+:\s*/gi, '')
      .trim();
  };

  useEffect(() => {
    // Reset player state when source or transcript changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setIsBuffering(false);
    setUseTTS(!src);
    onErrorStateChange?.(false);
  }, [src, transcriptText]);

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleAudioError = () => {
    console.warn("[AudioPlayer] HTML5 audio error/404 for src:", src, "- switching to TTS");
    setIsBuffering(false);
    setIsPlaying(false);
    
    if (transcriptText && 'speechSynthesis' in window) {
      setUseTTS(true);
      onErrorStateChange?.(false);
    } else {
      onErrorStateChange?.(true);
    }
  };

  const playTTS = () => {
    if (!('speechSynthesis' in window)) return;
    const textToSpeak = getCleanText(transcriptText);
    if (!textToSpeak) return;

    if (window.speechSynthesis.paused && isPlaying) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 0.92; // Slightly slower, clear exam-paced pronunciation
    utterance.pitch = 1.0;

    // Estimate duration based on word count (approx 150 words per minute)
    const wordCount = textToSpeak.split(/\s+/).length;
    const estimatedSecs = Math.max(10, Math.ceil((wordCount / 150) * 60));
    setDuration(estimatedSecs);

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsBuffering(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setProgress(100);
      setCurrentTime(estimatedSecs);
    };

    utterance.onerror = (e) => {
      console.error("[AudioPlayer] SpeechSynthesis error:", e);
      setIsPlaying(false);
      setIsBuffering(false);
    };

    utterance.onboundary = (e) => {
      if (textToSpeak.length > 0) {
        const pct = (e.charIndex / textToSpeak.length) * 100;
        setProgress(pct);
        setCurrentTime(Math.round((pct / 100) * estimatedSecs));
      }
    };

    synthUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (useTTS || !src) {
      if (isPlaying) {
        if (window.speechSynthesis) {
          window.speechSynthesis.pause();
        }
        setIsPlaying(false);
      } else {
        playTTS();
      }
      return;
    }

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsBuffering(true);
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setIsBuffering(false);
      }).catch((err) => {
        console.warn("[AudioPlayer] play error:", err);
        handleAudioError();
      });
    }
  };

  const handleTimeUpdate = () => {
    if (!useTTS && audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      if (total > 0) {
        setDuration(total);
        setCurrentTime(current);
        setProgress((current / total) * 100);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleRestart = () => {
    if (useTTS) {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      setTimeout(() => {
        playTTS();
      }, 100);
    } else if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      setCurrentTime(0);
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (useTTS || !audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    audioRef.current.currentTime = (x / rect.width) * duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 shadow-sm">
      {src && !useTTS && (
        <audio
          ref={audioRef}
          src={src}
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onWaiting={() => setIsBuffering(true)}
          onCanPlay={() => setIsBuffering(false)}
          onPlaying={() => setIsBuffering(false)}
          onError={handleAudioError}
        />
      )}

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 shadow-lg active:scale-95 transition-all shrink-0"
          title={isPlaying ? "Кідірту" : "Тыңдау"}
        >
          {isBuffering ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-blue-700 flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-blue-600" />
              {useTTS ? 'Дауыстық синтезатор (TTS Voice)' : 'Аудиожазба'}
            </span>
            <span className="text-xs text-blue-600 font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div 
            className="h-2.5 bg-blue-200 rounded-full overflow-hidden cursor-pointer hover:bg-blue-300 transition-colors"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 active:scale-95 transition-all shrink-0"
          title="Қайта басынан тыңдау"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
