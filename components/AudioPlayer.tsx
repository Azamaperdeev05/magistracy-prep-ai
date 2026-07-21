import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Loader2 } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  onErrorStateChange?: (hasError: boolean) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, onErrorStateChange }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setIsBuffering(false);
    setHasError(false);
    onErrorStateChange?.(false);
  }, [src]);

  const handleAudioError = () => {
    setIsBuffering(false);
    setIsPlaying(false);
    setHasError(true);
    onErrorStateChange?.(true);
  };

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("[AudioPlayer] play error:", err);
        handleAudioError();
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
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
    if (audioRef.current && !hasError) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      setCurrentTime(0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration || hasError) return;
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

  if (hasError) {
    return (
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-3.5 flex items-center justify-between text-xs text-amber-800 font-semibold shadow-xs">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Аудио жүктелмеді. Төмендегі транскрипция мәтінін оқып жауап беріңіз.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 shadow-sm">
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onWaiting={() => setIsBuffering(true)}
        onCanPlay={() => {
          setIsBuffering(false);
          setHasError(false);
        }}
        onPlaying={() => setIsBuffering(false)}
        onError={handleAudioError}
      />

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 shadow-lg active:scale-95 transition-all"
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
          <div 
            className="h-2.5 bg-blue-200 rounded-full overflow-hidden cursor-pointer hover:bg-blue-300 transition-colors"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5 text-xs text-blue-600 font-medium">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 active:scale-95 transition-all"
          title="Қайта тыңдау"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
