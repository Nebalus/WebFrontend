import DashboardNavBar from "@/components/dashboard/DashboardNavBar.tsx";
import DashboardHeaderNavBar from "@/components/dashboard/DashboardHeaderNavBar.tsx";
import {Outlet} from "react-router-dom";
import {Toaster, toast} from "sonner";
import {Button} from "@assets/components/shadcnui/button.tsx";

export default function DashboardRootLayout() {
    return (
        <div className="grid h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] fixed">
            <DashboardNavBar/>
            <div className="flex flex-col">
                <DashboardHeaderNavBar/>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <Outlet/>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast("Event has been created", {
                                description: "Sunday, December 03, 2023 at 9:00 AM",
                                action: {
                                    label: "Undo",
                                    onClick: () => console.log("Undo"),
                                },
                            })
                        }
                    >
                        Show Toast
                    </Button>
                </main>
                <Toaster/>
            </div>
        </div>
    );
}