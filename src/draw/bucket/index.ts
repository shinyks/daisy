import { color as colorObject, Rgba } from "../..";

const removeAlphaPixel = (data: Uint8ClampedArray): void => {
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] !== 255 && data[i + 3] !== 0) {
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      data[i + 3] = 0;
    }
  }
};

const getPosition = (x: number, y: number, canvasWidth: number): number => {
  return (y * canvasWidth + x) * 4;
};

const matchColor = (data: Uint8ClampedArray, position: number, color: Rgba): boolean => {
  return (data[position] === color.r && data[position + 1] === color.g && data[position + 2] === color.b && data[position + 3] === color.a);
};

const paintPixel = (data: Uint8ClampedArray, position: number, color: Rgba): void => {
  data[position] = color.r;
  data[position + 1] = color.g;
  data[position + 2] = color.b;
  data[position + 3] = color.a;
};

export const floodFill = (context: CanvasRenderingContext2D, startX: number, startY: number, x: number, y: number, width: number, height: number, color: string): void => {
  const fillColor = colorObject.htmlToRgba(color);
  const dstImg = context.getImageData(x, y, width, height);
  const dstData = dstImg.data;
  const loopLimit = 2000;
  let loopCount = 0;

  // removeAlphaPixel(dstData);

  const startPos = getPosition(Math.round(startX), Math.round(startY), width);
  const startColor = {
    r: dstData[startPos],
    g: dstData[startPos + 1],
    b: dstData[startPos + 2],
    a: dstData[startPos + 3],
  };
  const todo = [[Math.round(startX), Math.round(startY)]];

  loopCount = 0;

  while (todo.length) {
    if (loopCount++ > loopLimit) {
      break;
    }

    const pos = todo.pop() ?? [];
    const x = pos[0];
    let y = pos[1];
    let currentPos = getPosition(x, y, width);

    while ((y-- >= 0) && matchColor(dstData, currentPos, startColor)) {
      currentPos -= width * 4;
    }

    currentPos += width * 4;
    ++y;
    let reachLeft = false;
    let reachRight = false;

    while ((y++ < height - 1) && matchColor(dstData, currentPos, startColor)) {
      paintPixel(dstData, currentPos, fillColor);

      if (x > 0) {
        if (matchColor(dstData, currentPos - 4, startColor)) {
          if (!reachLeft) {
            todo.push([x - 1, y]);
            reachLeft = true;
          }
        }
        else if (reachLeft) {
          reachLeft = false;
        }
      }

      if (x < width - 1) {
        if (matchColor(dstData, currentPos + 4, startColor)) {
          if (!reachRight) {
            todo.push([x + 1, y]);
            reachRight = true;
          }
        }
        else if (reachRight) {
          reachRight = false;
        }
      }

      currentPos += width * 4;
    }
  }

  context.putImageData(dstImg, x, y);
};
