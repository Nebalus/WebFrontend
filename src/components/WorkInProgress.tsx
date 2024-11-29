import {JSX} from "react";
import StarBackground from "@/components/StarBackground.tsx";

export default function WorkInProgress(): JSX.Element {
    return (
        <>
            <StarBackground />
            <div className="bg-black dark:bg-black w-full h-screen flex items-center justify-center">
                <h1 className="text-6xl">🚀 Work In Progress 🚧</h1>
            </div>
        </>
    )
}