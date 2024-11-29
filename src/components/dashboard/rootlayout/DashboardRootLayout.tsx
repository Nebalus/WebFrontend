import {SidebarInset, SidebarProvider, SidebarTrigger} from "@assets/components/shadcnui/sidebar"
import DashboardSideBar from "@/components/dashboard/rootlayout/DashboardSideBar"
import {Separator} from "@assets/components/shadcnui/separator"
import {Outlet} from "react-router-dom";
import {Toaster} from "sonner";
import {DynamicBreadcrumb} from "@/components/dashboard/rootlayout/DynamicBreadcrumb.tsx";

export default function DashboardRootLayout() {
  return (
    <>
      <SidebarProvider defaultOpen={true}>
        <DashboardSideBar />
        <SidebarInset>
          <header className="flex h-16 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 fixed bg-background">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <DynamicBreadcrumb />
            </div>
          </header>
          <main className="mt-16">
            <Outlet/>
          </main>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  )
}