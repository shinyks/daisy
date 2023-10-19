import { number as isNumber } from "../is";

export interface ISize {
  width: number;
  height: number;
}

export class Size {
  private size: ISize = { width: 0, height: 0 };

  static get default(): Size {
    return new Size(0, 0);
  }

  get width(): number {
    return this.size.width;
  }

  set width(value: number) {
    this.size.width = value;
  }

  get height(): number {
    return this.size.height;
  }

  set height(value: number) {
    this.size.height = value;
  }

  get object(): ISize {
    const { width, height } = this.size;

    return { width, height };
  }

  constructor(width: number = 0, height: number = 0) {
    if (isNumber(width)) {
      this.width = width;
    }

    if (isNumber(height)) {
      this.height = height;
    }
  }

  setSize({ width, height }: Size): void {
    this.width = width;
    this.height = height;
  }

  setISize({ width, height }: ISize): void {
    this.width = width;
    this.height = height;
  }

  clone(): Size {
    const newObject = Size.default;

    newObject.setISize(this.object);

    return newObject;
  }
}
