/**
 * Ambient Audio Synthesizer for Romdah's 20th Birthday
 * Built using the Web Audio API for 100% self-contained, reliable playback
 * without external audio file dependencies.
 */

class BirthdayAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;
  private noteIndex: number = 0;

  // Gentle, dreamy music-box / kalimba pentatonic melody in D major / B minor
  private readonly notes = [
    587.33, // D5
    659.25, // E5
    739.99, // F#5
    880.00, // A5
    987.77, // B5
    1174.66, // D6
    987.77, // B5
    880.00, // A5
    739.99, // F#5
    880.00, // A5
    659.25, // E5
    587.33, // D5
    440.00, // A4
    493.88, // B4
    587.33, // D5
    739.99, // F#5
  ];

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Play a single bell/music-box chime note
  public playChime(freq: number, duration: number = 2.2, gainLevel: number = 0.25) {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain) return;

    try {
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const noteGain = ctx.createGain();

      // Sine wave base with gentle triangle overtone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2.01, ctx.currentTime); // gentle natural harmonic

      const now = ctx.currentTime;
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(gainLevel, now + 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + duration);
      osc2.stop(now + duration);
    } catch {
      // Audio error silenced gracefully
    }
  }

  // Celebratory sound for surprise unlock
  public playCelebrationChime() {
    const ctx = this.getContext();
    if (!ctx) return;
    const arpeggio = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
    arpeggio.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 2.5, 0.28);
      }, idx * 110);
    });
  }

  // Subtle tap feedback
  public playSoftTick() {
    this.playChime(880, 0.4, 0.08);
  }

  // Toggle looping ambient melody
  public toggleMusic(): boolean {
    if (this.isPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  public startMusic() {
    const ctx = this.getContext();
    if (!ctx) return;
    this.isPlaying = true;

    // Start playing serene ambient notes in rhythm
    const step = () => {
      if (!this.isPlaying) return;
      const freq = this.notes[this.noteIndex % this.notes.length];
      this.playChime(freq, 2.8, 0.16);

      // occasional bass warmth
      if (this.noteIndex % 4 === 0) {
        this.playChime(freq / 2, 3.4, 0.12);
      }

      this.noteIndex++;
    };

    step();
    this.intervalId = window.setInterval(step, 1400);
  }

  public stopMusic() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const birthdayAudio = new BirthdayAudioEngine();
