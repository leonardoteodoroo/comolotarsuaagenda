import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { AlertTriangle, CheckCircle, Play, Pause, Volume2, VolumeX, Instagram, ChevronDown } from 'lucide-react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showVideo && !playerRef.current) {
      // Load YouTube API
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new window.YT.Player('youtube-player', {
          videoId: 's2hT_A-4ekQ',
          playerVars: {
            autoplay: 1,
            controls: 0, // Hide ALL native controls
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            fs: 0,
            disablekb: 1,
            hl: 'pt-BR'
          },
          events: {
            onReady: (event: any) => {
              setIsPlayerReady(true);
              setIsPlaying(true);
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              // 1 = Playing, 2 = Paused
              if (event.data === 1) setIsPlaying(true);
              if (event.data === 2) setIsPlaying(false);
            }
          }
        });
      };
    }
  }, [showVideo]);

  const togglePlay = () => {
    if (playerRef.current && isPlayerReady) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const toggleMute = () => {
    if (playerRef.current && isPlayerReady) {
      if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(volume);
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (playerRef.current && isPlayerReady) {
      playerRef.current.setVolume(newVolume);
      if (isMuted && newVolume > 0) {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    }
  };

  return (
    <section className="relative w-full pt-12 pb-24 lg:py-32 bg-slate-900 text-white overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background Image - Keep eager for LCP */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://picsum.photos/id/43/1920/1080"
          alt="Background Texture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-slate-900/95"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center flex flex-col items-center">

        {/* Badge - Updated to Yellow/Gold */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/50 text-yellow-400 text-sm font-medium mb-8 animate-fade-in-up">
          <AlertTriangle className="w-4 h-4" />
          <span>Atenção Profissionais de Unhas</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(1.75rem,5.5vw,2.75rem)] md:text-6xl font-bold leading-tight mb-10 tracking-tight">
          O Botão <span className="text-red-500 line-through decoration-red-500 decoration-4">"Turbinar"</span> foi{' '}
          feito para o Instagram{' '}
          ganhar dinheiro, <span className="text-red-400 italic">não você.</span>
        </h1>

        {/* Video Section */}
        <div ref={containerRef} className="w-full aspect-video max-w-3xl bg-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-12 border border-slate-700 relative group">
          {!showVideo ? (
            <button
              onClick={() => setShowVideo(true)}
              className="w-full h-full relative flex items-center justify-center group cursor-pointer"
              aria-label="Assistir vídeo de apresentação"
            >
              <img
                src="https://www.cursomanicure.com/wp-content/uploads/2024/04/manicure-agenda-lotada-curso-1.png"
                alt="Capa do Vídeo"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                loading="eager"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-lg shadow-brand-600/50 transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-brand-600/30">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 w-full text-center text-white font-medium text-lg drop-shadow-md z-10 px-4">
                Toque para descobrir como lotar sua agenda
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </button>
          ) : (
            <div className="relative w-full h-full">
              {/* YouTube Iframe Container */}
              <div id="youtube-player" className="w-full h-full pointer-events-none"></div>

              {/* Custom Controls Overlay (Always visible or on hover, user requested specific buttons) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4 transition-opacity duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100">

                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                </button>

                {/* Volume Controls */}
                {/* Volume Controls Removed as requested */}

                {/* Progress Bar (Optional Visual Only as we removed seeking controls request? keeping it minimal) */}
                <div className="flex-grow text-xs text-slate-400 text-right pr-2">
                  {/* Placeholder for time if needed, user specially asked for Pause/Continue and Volume */}
                </div>

              </div>

              {/* Click overlay to toggle play/pause anywhere on video */}
              <div
                className="absolute inset-0 z-0"
                onClick={togglePlay}
                title={isPlaying ? "Pausar" : "Continuar"}
              ></div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center w-full gap-6">
          <a href="https://go.hotmart.com/B103637226N?ap=0f72&off=4a5h6otc" className="w-full md:w-auto">
            <Button variant="primary" className="text-base md:text-xl px-8 md:px-12 py-4 md:py-5 w-full md:w-auto shadow-brand-600/20 bg-green-600 hover:bg-green-700 whitespace-normal h-auto leading-tight">
              Quero profissionalizar minha agenda e meu lucro
            </Button>
          </a>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-slate-400 font-medium text-sm md:text-base mt-2">
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-[#E1306C]" />
              <span>1,2 Mi de Seguidoras</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Mais de 17.000 alunas aprovadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-500 pointer-events-none z-20 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Role para baixo</span>
        <ChevronDown className="w-6 h-6 text-green-500 animate-bounce" />
      </div>
    </section>
  );
};