import { Hourglass, Home, Link, ChartSpline, ClipboardList, ListTree } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@assets/components/shadcnui/sidebar"
import SiteLogo from "@/components/SiteLogo"
import { NavUser } from "@/components/dashboard/rootlayout/DashboardSideBarUser"
import {NavLink, useLocation} from "react-router-dom"
import {useEffect, useState} from "react";
import {APP_DASHBOARD_PATH} from "@/constants.ts";

// Menu items.
const items = [
  {
    title: "Home",
    url: APP_DASHBOARD_PATH,
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
  }
]

export default function DashboardSideBar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

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
                  <SidebarMenuButton isActive={currentPage === APP_DASHBOARD_PATH + item.url} asChild>
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
