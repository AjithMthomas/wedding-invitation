import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface AudioPlayerProps {
  autoStartTrigger?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoStartTrigger = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto-start when user opens the invitation
  useEffect(() => {
    if (autoStartTrigger && !isPlaying) {
      audioEngine.startMusic();
      setIsPlaying(true);
    }
  }, [autoStartTrigger]);

  const togglePlay = () => {
    const nextState = audioEngine.toggleMusic();
    setIsPlaying(nextState);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioEngine.setVolume(val);
  };

  // Real-time equalizer visualizer animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isPlaying) {
        const data = audioEngine.getAnalyserData();
        const barWidth = 3;
        const gap = 2;
        const totalBars = 4;

        for (let i = 0; i < totalBars; i++) {
          const val = data[i * 2] || 50;
          // Simulated or real height
          const barHeight = Math.max(3, (val / 255) * canvas.height * 0.95 + (Math.sin(Date.now() * 0.008 + i) * 6 + 6));
          const x = i * (barWidth + gap);
          const y = canvas.height - barHeight;

          ctx.fillStyle = '#C5A45C';
          ctx.fillRect(x, y, barWidth, barHeight);
        }
      } else {
        // Flat bars when paused
        for (let i = 0; i < 4; i++) {
          ctx.fillStyle = 'rgba(197, 164, 92, 0.4)';
          ctx.fillRect(i * 5, canvas.height - 3, 3, 3);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Expanded controls popup */}
      {isExpanded && (
        <div className="bg-[#45151D]/95 backdrop-blur-md border border-[#C5A45C]/50 rounded-full px-4 py-2 flex items-center gap-3 shadow-2xl animate-fade-in text-[#F8F4EC]">
          <span className="text-xs font-serif text-[#D8C49A] hidden sm:inline whitespace-nowrap">
            Raag Hansdhwani • Joyful Flute
          </span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 sm:w-20 accent-[#C5A45C] cursor-pointer"
            title={`Volume: ${Math.round(volume * 100)}%`}
          />
        </div>
      )}

      {/* Main Floating Music Pill */}
      <div className="flex items-center bg-[#45151D]/90 backdrop-blur-md border border-[#C5A45C] rounded-full p-1.5 shadow-luxury transition-all hover:border-[#D8C49A]">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#641F2B] to-[#301015] flex items-center justify-center text-[#C5A45C] hover:text-[#FFF4D9] hover:scale-105 active:scale-95 transition-all shadow-md border border-[#C5A45C]/40"
          title={isPlaying ? 'Pause music' : 'Play joyful wedding music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Visualizer Canvas & Track Label */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-3 py-1 cursor-pointer text-left select-none group"
          title="Adjust wedding music settings"
        >
          <canvas
            ref={canvasRef}
            width={20}
            height={16}
            className="w-5 h-4"
          />
          <div className="flex flex-col">
            <span className="text-[11px] font-royal tracking-widest text-[#D8C49A] group-hover:text-[#F8F4EC] transition-colors leading-tight">
              {isPlaying ? 'JOYFUL WEDDING FLUTE' : 'MUSIC PAUSED'}
            </span>
            <span className="text-[9px] text-[#EEE5D7]/70 font-sans leading-tight hidden xs:inline">
              Pleasant & Auspicious Harmony
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

