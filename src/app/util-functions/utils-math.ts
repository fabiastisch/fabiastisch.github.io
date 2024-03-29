export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}


export const transpose = (m: any[]) => m[0].map((x: any, i: string | number) => m.map(x => x[i]));


export function shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
  return array;
}

export function arrayStartAtZero(size: number): number[] {
  return Array.from({length: size}, (_, i) => i);
}

export function arrayStartAtOne(size: number): number[] {
  return Array.from({length: size}, (_, i) => i + 1);
}
