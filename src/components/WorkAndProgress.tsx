import {JSX} from "react";
import StarBackground from "@/components/StarBackground.tsx";

export default function WorkAndProgress(): JSX.Element {
    return (
        <>
            <StarBackground />
            <div className="bg-black dark:bg-black w-screen h-screen flex items-center justify-center">
                <h1 className="text-6xl z-10">🚀 Work And Progress 🚧</h1>
            </div>
        </>
    )
}