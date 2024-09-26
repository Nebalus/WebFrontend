import SiteLogo from "@/components/SiteLogo.tsx";
import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ChartSpline, ClipboardList, Home, Link, ListTree} from "lucide-react";

export default function DashboardNavBar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);

    const classActive = 'flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary';
    const classNotAction = 'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary';
    const classIconSize = 'h-5 w-5';

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <>
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 w-full justify-center border-b lg:h-[60px] lg:px-10">
                       <SiteLogo className="flex items-center gap-2 font-semibold" />
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <NavLink to="/-/" className={currentPage === '/-/' ? classActive : classNotAction}>
                                <Home className={classIconSize} />
                                Dashboard
                            </NavLink>
                            <NavLink to="/-/referrals" className={currentPage === '/-/referrals' ? classActive : classNotAction}>
                                <Link className={classIconSize} />
                                Referrals
                            </NavLink>
                            <NavLink to="/-/linktree" className={currentPage === '/-/linktree' ? classActive : classNotAction}>
                                <ListTree className={classIconSize}/>
                                Linktree
                            </NavLink>
                            <NavLink to="/-/analytics" className={currentPage === '/-/analytics' ? classActive : classNotAction}>
                                <ChartSpline className={classIconSize}/>
                                Analytics
                            </NavLink>
                            <NavLink to="/-/todos" className={currentPage === '/-/todos' ? classActive : classNotAction}>
                                <ClipboardList className={classIconSize}/>
                                Todos
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}