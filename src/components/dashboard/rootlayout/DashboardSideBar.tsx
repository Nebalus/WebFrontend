import { Hourglass, Home, Link, ChartSpline, ClipboardList, ListTree, Ticket } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@assets/components/shadcnui/sidebar"
import SiteLogo from "@/components/SiteLogo"
import { NavUser } from "@/components/dashboard/rootlayout/DashboardSideBarUser"
import { NavLink } from "react-router-dom"

// Menu items.
const items = [
  {
    title: "Home",
    url: "",
    icon: Home,
  },
  {
    title: "Refferals",
    url: "referrals",
    icon: Link,
  },
  {
    title: "Linktree",
    url: "linktree",
    icon: ListTree,
  },
  {
    title: "Analytics",
    url: "analytics",
    icon: ChartSpline,
  },
  {
    title: "Todos",
    url: "todos",
    icon: ClipboardList,
  },
  {
    title: "Time Capsules",
    url: "timecapsule",
    icon: Hourglass,
  },
  {
    title: "Tickets",
    url: "tickets",
    icon: Ticket,
  },
]

export default function DashboardSideBar() {

  const user = {
    name: "TEST",
    email: "test@test.de",
    avatar: "TT"
  }

  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader className="pt-5 items-center">
        <SiteLogo />  
      </ SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon/>
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
