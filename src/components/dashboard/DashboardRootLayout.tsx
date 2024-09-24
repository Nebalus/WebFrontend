import DashboardNavBar from "@/components/dashboard/DashboardNavBar.tsx";
import DashboardHeaderNavBar from "@/components/dashboard/DashboardHeaderNavBar.tsx";

export default function DashboardRootLayout() {
    return (
        <>
            <div className="grid h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] fixed">
                <DashboardNavBar/>
                <DashboardHeaderNavBar />
            </div>
        </>
    );
}