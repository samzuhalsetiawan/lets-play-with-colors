import { debug, getRandomInt, hexToRgb, rgbToHex, rgbToHexString } from "./utils"

function getKomposisi(color1: number, color2: number, rasio: number): number {
    const selisih = color1 < color2 ? color2 - color1 : color1 - color2  
    
    if (color1 < color2) {
        return color2 - selisih * rasio 
    } else if (color1 > color2) {
        return color2 + selisih * rasio
    } else {
        return color1
    }
}

export function campurWarna(warna1: number | string, warna2: number | string, rasio: number): number {
    const rgb1 = hexToRgb(warna1)
    const rgb2 = hexToRgb(warna2)
    const newRed = getKomposisi(rgb1.red / 255, rgb2.red / 255, rasio)
    const newGreen = getKomposisi(rgb1.green / 255, rgb2.green / 255, rasio)
    const newBlue = getKomposisi(rgb1.blue / 255, rgb2.blue / 255, rasio)
    return rgbToHex(
        Math.round(newRed * 255),
        Math.round(newGreen * 255),
        Math.round( newBlue * 255)
    )
}

export function generateRandomColorHexString() {
    const r = getRandomInt(0, 255)
    const g = getRandomInt(0, 255)
    const b = getRandomInt(0, 255)
    return rgbToHexString(r, g, b)
}