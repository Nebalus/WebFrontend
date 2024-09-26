import DashboardNavBar from "@/components/dashboard/rootlayout/DashboardNavBar.tsx";
import DashboardHeaderNavBar from "@/components/dashboard/rootlayout/DashboardHeaderNavBar.tsx";
import {Outlet} from "react-router-dom";
import {Toaster} from "sonner";

export default function DashboardRootLayout() {
    return (
        <div className="grid h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] fixed">
            <DashboardNavBar/>
            <div className="flex flex-col">
                <DashboardHeaderNavBar/>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <Outlet/>
                </main>
                <Toaster/>
            </div>
        </div>
    );
}