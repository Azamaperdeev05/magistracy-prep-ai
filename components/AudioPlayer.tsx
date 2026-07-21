import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, AlertCircle, RefreshCw } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const maxRetries = 3;

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setLoadError(false);
    setRetryCount(0);
    setIsLoading(true);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [src]);

  const handleRetry = useCallback(() => {
    if (retryCount >= maxRetries) return;
    setLoadError(false);
    setIsLoading(true);
    setRetryCount(prev => prev + 1);
    if (audioRef.current) {
      audioRef.current.src = '';
      audioRef.current.src = src;
      audioRef.current.load();
    }
  }, [src, retryCount]);

  const togglePlay = () => {
    if (!audioRef.current || loadError) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const promise = audioRef.current.play();
      if (promise !== undefined) {
        promise.catch(error => {
          console.error("Audio playback error:", error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setDuration(total);
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      setCurrentTime(0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audioRef.current.currentTime = percentage * duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 shadow-sm">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
          setIsLoading(false);
        }}
        onError={() => {
          setIsLoading(false);
          if (retryCount < maxRetries) {
            handleRetry();
          } else {
            setLoadError(true);
          }
        }}
        onLoadStart={() => setIsLoading(true)}
      />

      {loadError ? (
        <div className="flex flex-col items-center gap-2 text-red-500 text-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Аудио жүктелмеді</span>
          </div>
          <button
            onClick={handleRetry}
            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 underline"
          >
            <RefreshCw className="w-3 h-3" />
            Қайта көру
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 shadow-lg active:scale-95 transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
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
      )}
    </div>
  );
};

export default AudioPlayer;
