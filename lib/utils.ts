import { IllegalArgumentTypeException } from "@/exceptions";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hexToRgb(hex: number | string): Rgb {
  let hexString = "#000000"
  if (typeof hex === "string") {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hexString = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
  } else if (typeof hex === "number") {
    hexString = hexToString(hex)
  } else {
    console.error("Error unexpected type: " + typeof hex)
    throw new IllegalArgumentTypeException()
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
  return result ? {
    red: parseInt(result[1], 16),
    green: parseInt(result[2], 16),
    blue: parseInt(result[3], 16)
  } as Rgb : { red: 0, green: 0, blue: 0 } as Rgb;
}

export function hexToString(hex: number): string {
  let hexString = (hex).toString(16);
  const hexLength = hexString.length
  if (hexLength > 6) throw new Error("Unsupported HEX length more than 6")
  for (let index = 5; index >= hexLength; index--) {
    hexString = "0" + hexString
  }
  return "#" + hexString
}

export function rgbToHex(r: number, g: number, b: number): number {
  return (r << 16 | g << 8 | b);
}

export function rgbToHexString(r: number, g: number, b: number): string {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

export function rgbToHsl({ red: r, green: g, blue: b }: Rgb): Hsl{
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if(max == min){
      h = s = 0; // achromatic
  }else{
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
          default: h = 0; break;
      }
      h /= 6;
  }

  return {
    hue: Math.round(h * 360),
    saturation: Math.round(s * 100),
    lightness: Math.round(l * 100)
  };
}

export function hexToTwBgClass(hex: number | string): string {
  switch (typeof hex) {
    case "number":
      return cn("bg-[" + hexToString(hex) + "]")
    case "string":
      return cn("bg-[" + hex + "]")
    default:
      return cn("bg-[#000000]")
  }
}

export function getRandomInt(min: number, max: number) {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
}

export function shuffleArray<T>(array: T[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function debug(tag: string, data: any) {
  console.log("===START " + tag + "===")
  console.log(data)
  console.log("===END " + tag + "===")
}