import { Hourglass, Home, Link, ChartSpline, ClipboardList, ListTree, MoreHorizontal, Folder, Forward, Trash2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@assets/components/shadcnui/sidebar"
import SiteLogo from "@/components/SiteLogo"
import { NavUser } from "@/components/dashboard/rootlayout/DashboardSideBarUser"
import {NavLink, useLocation} from "react-router-dom"
import {useEffect, useState} from "react";
import {APP_DASHBOARD_PATH} from "@/constants.ts";
import { Tooltip, TooltipContent, TooltipTrigger } from "@assets/components/shadcnui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@assets/components/shadcnui/dropdown-menu"

// Menu items.
const data = {
  user: {
    name: "TEST",
    email: "test@test.de",
    avatar: "TT"
  },
  navMain: [
    {
      title: "Home",
      url: APP_DASHBOARD_PATH,
      icon: Home,
      tooltip: "TEST",
      dropdown: []
    },
    {
      title: "Refferals",
      url: "referrals",
      icon: Link,
      tooltip: undefined,
      dropdown: [
        {
          title: "T",
          url: APP_DASHBOARD_PATH,
          icon: Home,
        }
      ]
    },
    {
      title: "Linktree",
      url: "linktree",
      icon: ListTree,
      tooltip: undefined,
      dropdown: []
    },
    {
      title: "Analytics",
      url: "analytics",
      icon: ChartSpline,
      tooltip: undefined,
      dropdown: []
    },
    {
      title: "Todos",
      url: "todos",
      icon: ClipboardList,
      tooltip: undefined,
      dropdown: []
    },
    {
      title: "Time Capsules",
      url: "timecapsule",
      icon: Hourglass,
      tooltip: undefined,
      dropdown: []
    }
  ]
}

export default function DashboardSideBar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const { isMobile } = useSidebar()

  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader className="pt-5 items-center">
        <SiteLogo />  
      </ SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Tooltip >
                  <TooltipTrigger>
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={currentPage === APP_DASHBOARD_PATH + item.url} asChild>
                        <NavLink to={item.url}>
                          <item.icon/>
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuAction showOnHover>
                            <MoreHorizontal />
                            <span className="sr-only">More</span>
                          </SidebarMenuAction>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="w-48 rounded-lg"
                          side={isMobile ? "bottom" : "right"}
                          align={isMobile ? "end" : "start"}
                        >
                          {data.navMain.forEach().map((dropdownItem) => (
                            dropdownItem.
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  </TooltipTrigger>
                  {
                    item.tooltip && (
                      <TooltipContent>
                        {item.tooltip}
                      </TooltipContent>
                    )
                  }
                </Tooltip>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
