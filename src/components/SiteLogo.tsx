import {SquareTerminal} from "lucide-react";

interface SiteLogoProps {
    className?: string
}

export default function SiteLogo({className}: SiteLogoProps) {
    return (
        <>
            <div className={className}>
                <div className={"flex items-center"}>
                    <SquareTerminal className="h-8 w-8"/>
                    <span className="ml-2 text-xl font-bold">nebalus.dev</span>
                </div>
            </div>
        </>
    )
}