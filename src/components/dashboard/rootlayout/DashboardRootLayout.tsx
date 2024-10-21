import { SidebarProvider, SidebarTrigger } from "@assets/components/shadcnui/sidebar"
import DashboardSideBar from "@/components/dashboard/rootlayout/DashboardSideBar"

export default function DashboardRootLayout() {
  return (
    <SidebarProvider>
      <DashboardSideBar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  )
}
