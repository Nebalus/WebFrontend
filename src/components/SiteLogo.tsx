import {SquareTerminal} from "lucide-react";
import {Link} from "react-router-dom";
import {useAuthenticatedUserStore} from "@/stores/UserStore.ts";
import {APP_DASHBOARD_PATH} from "@/constants.ts";

interface SiteLogoProps {
    className?: string
}

export default function SiteLogo({className}: SiteLogoProps) {
    const { isAuthenticated } = useAuthenticatedUserStore();

    return (
        <>
            <Link to={isAuthenticated() ? APP_DASHBOARD_PATH : "/"} className={className}>
                <div className="flex items-center">
                    <SquareTerminal className="h-8 w-8"/>
                    <span className="ml-2 text-2xl font-bold">nebalus.dev</span>
                </div>
            </Link>
        </>
    )
}