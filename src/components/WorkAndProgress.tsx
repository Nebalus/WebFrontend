import {JSX} from "react";
import StarBackground from "@/components/StarBackground.tsx";

export default function WorkAndProgress(): JSX.Element {
    return (
        <div className="bg-black dark:bg-black w-screen h-screen flex items-center justify-center">
            <StarBackground />
            <h1 className="text-6xl">🚀 Work And Progress 🚧</h1>
        </div>
    )
}