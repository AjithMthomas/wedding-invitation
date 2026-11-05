/**
 * Authentic Hindu Wedding Shehnai & Sacred Audio Engine
 * Features:
 * - Authentic Hindu Wedding Shehnai instrumental (Ustad Bismillah Khan - Auspicious Benarasi Wedding Dhun)
 * - Real-time Web Audio AnalyserNode for equalizer visualizer
 * - Physical interaction sound effects (Wax seal crack & temple brass bell chime)
 * - Resilient autoplay handling and background music persistence
 */

class WeddingAudioEngine {
  private audioEl: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private volume: number = 0.55;
  private analyser: AnalyserNode | null = null;
  private isConnectedToWebAudio: boolean = false;

  constructor() {
    // Lazy initialized on first user interaction
  }

  private initAudio() {
    if (!this.audioEl) {
      this.audioEl = new Audio('/audio/joyful_wedding_melody.mp3');
      this.audioEl.loop = true;
      this.audioEl.preload = 'auto';
      this.audioEl.volume = this.volume;
    }

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.audioEl && this.ctx && this.analyser && !this.isConnectedToWebAudio) {
      try {
        const source = this.ctx.createMediaElementSource(this.audioEl);
        source.connect(this.analyser);
        this.analyser.connect(this.ctx.destination);
        this.isConnectedToWebAudio = true;
      } catch (e) {
        // Fallback for browsers with media element source restrictions
        console.warn('Audio media element source note:', e);
      }
    }
  }

  // Play realistic wax seal cracking sound
  public playSealCrack() {
    try {
      this.initAudio();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(3, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      whiteNoise.start(now);

      // Low resonant thud
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);
      oscGain.gain.setValueAtTime(0.7, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch (e) {
      console.warn('Audio playSealCrack error:', e);
    }
  }

  // Auspicious sacred temple bell chime
  public playTempleBell() {
    try {
      this.initAudio();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const harmonics = [523.25, 784.0, 1046.5, 1568.0, 2093.0];
      const weights = [0.4, 0.25, 0.15, 0.1, 0.05];

      harmonics.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(weights[idx] * 0.45, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5 + idx * 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 4.5);
      });
    } catch (e) {
      console.warn('Audio playTempleBell error:', e);
    }
  }

  // Start continuous auspicious Hindu Wedding Shehnai music
  public startMusic() {
    this.initAudio();
    if (!this.audioEl) return;

    this.audioEl.play().then(() => {
      this.isPlaying = true;
    }).catch(err => {
      console.warn('Audio autoplay blocked, awaiting interaction:', err);
    });
  }

  public pauseMusic() {
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.isPlaying = false;
  }

  public toggleMusic(): boolean {
    if (this.isPlaying) {
      this.pauseMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioEl) {
      this.audioEl.volume = this.volume;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getAnalyserData(): Uint8Array {
    if (!this.analyser) return new Uint8Array(32);
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return data;
  }
}

export const audioEngine = new WeddingAudioEngine();
