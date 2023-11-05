'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import BottleGlass from "../bottle-glass/BottleGlass"
import VerticalSlider from "../vertical-slider/VerticalSlider"
import { campurWarna } from "@/lib/Core"
import { cn, hexToString } from "@/lib/utils"
import SmallBottleGlass from "../bottle-glass/SmallBottleGlass"
import ColorListContainer from "../ColorListContainer"

export default function Converter() {

    const [color1, setColor1] = useState("#ffff00")
    const [color2, setColor2] = useState("#ff256b")
    const [colorPickerResultController, setColorPickerResultController] = useState<{ setter: Dispatch<SetStateAction<string>> }>()
    const [colorSlider1Value, setColorSlider1Value] = useState(0.5)
    const [colorSlider2Value, setColorSlider2Value] = useState(0.5)
    const [showColorPicker, setShowColorPicker] = useState(false)

    const onColorPickerSelected = (color: string) => {
        colorPickerResultController && colorPickerResultController.setter(color)
    }

    function onSliderValueChange(setColorSliderValue: Dispatch<SetStateAction<number>>, setAnoterColorSliderValue: Dispatch<SetStateAction<number>>): ((value: number) => void) | undefined {
        return (value: number) => {
            setColorSliderValue(value)
            setAnoterColorSliderValue(1 - value)
        }
    }

    function showColorPickerFor(colorSetter: Dispatch<SetStateAction<string>>): (() => void) | undefined {
        return () => {
            setColorPickerResultController({ setter: colorSetter })
            setShowColorPicker(true)
        }
    }

    return (
        <section className="relative min-h-screen w-screen">
            <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0">
                <div className='flex flex-[1.3] justify-center items-center'>
                    <BottleGlass liquidPercentage={1} color={hexToString(campurWarna(color1, color2, colorSlider1Value))} />
                </div>
                <div className='flex flex-[2] justify-center items-center gap-28'>
                    <div className="flex items-end gap-5 relative">
                        <BottleGlass onClick={showColorPickerFor(setColor1)} liquidPercentage={colorSlider1Value} color={color1} />
                        <VerticalSlider className="absolute bottom-0 left-[calc(100%+25px)]" value={colorSlider1Value} color={color1} onValueChange={onSliderValueChange(setColorSlider1Value, setColorSlider2Value)}/>
                    </div>
                    <div className="flex items-end gap-5 relative">
                        <BottleGlass onClick={showColorPickerFor(setColor2)} liquidPercentage={colorSlider2Value} color={color2} />
                        <VerticalSlider className="absolute bottom-0 left-[calc(100%+25px)]" value={colorSlider2Value} color={color2} onValueChange={onSliderValueChange(setColorSlider2Value, setColorSlider1Value)}/>
                    </div>
                </div>
            </div>
            <div
                className={cn("px-24 py-12 min-h-screen w-screen flex-col justify-center backdrop-blur-md", showColorPicker ? "flex" : "hidden")}
                onClick={() => setShowColorPicker(false)}>
                <ColorListContainer title="Warna Primer">
                    <SmallBottleGlass onClick={onColorPickerSelected} color="#0086de" />
                    <SmallBottleGlass onClick={onColorPickerSelected} color="#ffff00" />
                    <SmallBottleGlass onClick={onColorPickerSelected} color="#ff256b" />
                </ColorListContainer>
                <ColorListContainer title="Warna Sekunder">
                    <SmallBottleGlass onClick={onColorPickerSelected} color="#8056a5" />
                    <SmallBottleGlass onClick={onColorPickerSelected} color="#80c36f" />
                    <SmallBottleGlass onClick={onColorPickerSelected} color="#ff9236" />
                </ColorListContainer>
                <ColorListContainer title="Warna Tersier">
                    <SmallBottleGlass onClick={onColorPickerSelected} color="#000000" />
                    <SmallBottleGlass onClick={onColorPickerSelected} color="#ffffff" />
                </ColorListContainer>
            </div>
        </section>
    )
}