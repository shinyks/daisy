type FnOnTime = ((elapsedTimeMs: number) => boolean);

export class Interval {
  private startTimestamp: number | null = null;

  private baseTime: number = 0;
  private elapsedTime: number = 0;
  private intervalTime: number = 0;
  private prevIntervalTime: number = 0;

  private frameId: number = 0;
  private onTime: FnOnTime | null = null;

  isRunning: boolean = false;

  start(onTime: FnOnTime, baseTimeMs: number = 0, intervalTimeMs: number = 0): void {
    this.stop();

    this.onTime = onTime;
    this.startTimestamp = null;
    this.baseTime = baseTimeMs;
    this.elapsedTime = 0;
    this.prevIntervalTime = -intervalTimeMs;
    this.intervalTime = intervalTimeMs;
    this.isRunning = true;

    this.frameId = window.requestAnimationFrame(this.step.bind(this));
  }

  stop(): void {
    if (this.frameId) {
      window.cancelAnimationFrame(this.frameId);

      this.frameId = 0;
      this.isRunning = false;
    }
  }

  private step(currentTimestamp: number): void {
    if (!this.startTimestamp) {
      this.startTimestamp = currentTimestamp;
    }

    this.elapsedTime = currentTimestamp - this.startTimestamp;

    if (this.elapsedTime - this.prevIntervalTime >= this.intervalTime) {
      this.prevIntervalTime += this.intervalTime;

      if (this.onTime) {
        if (!this.onTime(this.baseTime + this.elapsedTime)) {
          this.stop();

          return;
        }
      }
    }

    this.frameId = window.requestAnimationFrame(this.step.bind(this));
  }
}
