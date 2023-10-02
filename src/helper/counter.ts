export class Counter {
  private initialValue: number;
  private count: number;

  get value(): number {
    return this.count;
  }

  constructor(initialValue: number = 0) {
    this.initialValue = initialValue;
    this.count = initialValue;
  }

  reset(): number {
    this.count = this.initialValue;

    return this.count;
  }

  gte(terminalValue: number): boolean {
    return this.count >= terminalValue;
  }

  gt(terminalValue: number): boolean {
    return this.count > terminalValue;
  }

  lte(terminalValue: number): boolean {
    return this.count <= terminalValue;
  }

  lt(terminalValue: number): boolean {
    return this.count < terminalValue;
  }

  increase(): number {
    this.count += 1;

    return this.count;
  }
}
