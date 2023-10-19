type FnOnTime = (() => void);

export class Timeout {
  private id: number = 0;
  private callback: FnOnTime | null = null;

  private clearTimer(): void {
    if (this.id) {
      window.clearTimeout(this.id);

      this.id = 0;
    }
  }

  private clearCallback(): void {
    this.callback = null;
  }

  private execCallback(): void {
    this.callback?.();
  }

  start(callback: FnOnTime, timeoutMs: number = 0): void {
    this.clear();

    this.callback = callback;

    this.id = window.setTimeout(() => {
      this.done();
    }, timeoutMs);
  }

  clear(): void {
    this.clearTimer();
    this.clearCallback();
  }

  done(): void {
    this.clearTimer();
    this.execCallback();
  }
}

export const wait = async (durationMs: number): Promise<void> => {
  const timeout = new Timeout();

  return new Promise((resolve, reject) => {
    timeout.start(() => resolve(), durationMs);
  });
};
