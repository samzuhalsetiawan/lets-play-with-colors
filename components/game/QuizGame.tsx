'use client'

import { cn, hexToString, shuffleArray } from "@/lib/utils";
import SmallBottleGlass from "../bottle-glass/SmallBottleGlass";
import { useState } from "react";
import { campurWarna, generateRandomColorHexString } from "@/lib/Core";
import { Player } from "@lottiefiles/react-lottie-player";

type ResultState = "CORRECT" | "WRONG";
type Choises = "CORRECT" | "WRONG_A" | "WRONG_B"

interface QuizGameProps {
    className?: string
}

export default function QuizGame({ className = "" }: QuizGameProps) {

    const [colorA, setColorA] = useState(generateRandomColorHexString())
    const [colorB, setColorB] = useState(generateRandomColorHexString())
    const [wrongColorA, setWrongColorA] = useState(generateRandomColorHexString())
    const [wrongColorB, setWrongColorB] = useState(generateRandomColorHexString())
    const [answer, setAnswer] = useState(hexToString(campurWarna(colorA, colorB, 0.5)))
    const [resultState, setResultState] = useState<ResultState | null>(null)
    const [choisesPosition, setChoisesPostition] = useState<Choises[]>(shuffleArray(["WRONG_A", "CORRECT", "WRONG_B"]))

    const checkAnswer = (color: string) => {
        if (color === answer) {
            setResultState("CORRECT")
        } else {
            setResultState("WRONG")
        }
    }

    const setupNewGame = () => {
        setColorA(generateRandomColorHexString())
        setColorB(generateRandomColorHexString())
        setWrongColorA(generateRandomColorHexString())
        setWrongColorB(generateRandomColorHexString())
        setAnswer(hexToString(campurWarna(colorA, colorB, 0.5)))
        setChoisesPostition(shuffleArray(["WRONG_A", "CORRECT", "WRONG_B"]))
        setResultState(null)
    }

    return (
        <div className={cn("relative h-screen flex flex-col justify-center", className)}>
            <div onClick={() => setupNewGame()} className={cn("fixed top-0 left-0 h-screen w-screen backdrop-blur z-50 justify-center items-center", resultState ? "flex" : "hidden")}>
                { resultState === "CORRECT" && (
                    <Player
                        autoplay
                        keepLastFrame
                        src="/correct_animation.json"
                        style={{ height: '300px', width: '300px' }} />
                ) }
                { resultState === "WRONG" && (
                    <Player
                        autoplay
                        keepLastFrame
                        src="/wrong_animation.json"
                        style={{ height: '300px', width: '300px' }} />
                ) }
            </div>
            <div className={cn("flex justify-center py-12")}>
                <SmallBottleGlass color={colorA} />
                <div className="w-48 flex flex-col justify-center gap-5">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--main-white)]"></div>
                    <svg className="text-[var(--main-white)] mx-auto" width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.07505 4.10001C5.07505 2.91103 6.25727 1.92502 7.50005 1.92502C8.74283 1.92502 9.92505 2.91103 9.92505 4.10001C9.92505 5.19861 9.36782 5.71436 8.61854 6.37884L8.58757 6.4063C7.84481 7.06467 6.92505 7.87995 6.92505 9.5C6.92505 9.81757 7.18248 10.075 7.50005 10.075C7.81761 10.075 8.07505 9.81757 8.07505 9.5C8.07505 8.41517 8.62945 7.90623 9.38156 7.23925L9.40238 7.22079C10.1496 6.55829 11.075 5.73775 11.075 4.10001C11.075 2.12757 9.21869 0.775024 7.50005 0.775024C5.7814 0.775024 3.92505 2.12757 3.92505 4.10001C3.92505 4.41758 4.18249 4.67501 4.50005 4.67501C4.81761 4.67501 5.07505 4.41758 5.07505 4.10001ZM7.50005 13.3575C7.9833 13.3575 8.37505 12.9657 8.37505 12.4825C8.37505 11.9992 7.9833 11.6075 7.50005 11.6075C7.0168 11.6075 6.62505 11.9992 6.62505 12.4825C6.62505 12.9657 7.0168 13.3575 7.50005 13.3575Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <SmallBottleGlass color={colorB} />
            </div>
            <div className={cn("flex justify-center gap-12 py-12")}>
                { choisesPosition.map(choise => {
                    if (choise === "CORRECT") {
                        return (<SmallBottleGlass className={cn("opacity-100 transition")} onClick={checkAnswer} color={answer} />)
                    } else if (choise === "WRONG_A") {
                        return (<SmallBottleGlass className={cn("opacity-100 transition", resultState ? "opacity-0" : "")} onClick={checkAnswer} color={wrongColorA} />)
                    } else if (choise === "WRONG_B") {
                        return (<SmallBottleGlass className={cn("opacity-100 transition", resultState ? "opacity-0" : "")} onClick={checkAnswer} color={wrongColorB} />)
                    }
                }) }
            </div>
        </div>
    )
}