import SmallBottleGlass from "@/components/bottle-glass/SmallBottleGlass";
import QuizGame from "@/components/game/QuizGame";
import { cn } from "@/lib/utils";

export default function QuizPage() {
    return (
        <div className={cn("min-h-screen w-screen")}>
            <QuizGame />
        </div>
    )
}