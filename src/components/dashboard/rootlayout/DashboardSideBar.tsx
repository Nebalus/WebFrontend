import {
  ChartSpline,
  ClipboardList,
  Home,
  Hourglass,
  Link,
  ListTree,
  LucideIcon,
  MoreHorizontal,
  Plus
} from "lucide-react"

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
import {NavUser} from "@/components/dashboard/rootlayout/DashboardSideBarUser"
import {NavLink, useLocation} from "react-router-dom"
import {useEffect, useState} from "react";
import {APP_DASHBOARD_PATH} from "@/constants.ts";
import {Tooltip, TooltipContent, TooltipTrigger} from "@assets/components/shadcnui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@assets/components/shadcnui/dropdown-menu"

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  tooltip?: string;
  dropdown: DropdownItem[];
}

interface DropdownItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface Navigation {
  user: User;
  navMain: NavItem[];
}

// Menu items.
const navigation: Navigation = {
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
      tooltip: undefined,
      dropdown: []
    },
    {
      title: "Refferals",
      url: "referrals",
      icon: Link,
      tooltip: undefined,
      dropdown: [
        {
          title: "Create Referral",
          url: APP_DASHBOARD_PATH,
          icon: Plus,
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

  const loadDropdownActions = (navItem: NavItem) => {
    if (navItem.dropdown?.length) {
      return (
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
            {
              navItem.dropdown.map((dropdownItem) => (
                <DropdownMenuItem >
                  <dropdownItem.icon/>
                  {dropdownItem.title}
                </DropdownMenuItem>
              ))
            }
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  };

  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader className="pt-5 items-center">
        <SiteLogo />  
      </ SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                navigation.navMain.map((navItem) => (
                  <Tooltip>
                    <TooltipTrigger>
                      <SidebarMenuItem key={navItem.title}>
                        <SidebarMenuButton isActive={currentPage === APP_DASHBOARD_PATH + navItem.url} asChild>
                          <NavLink to={navItem.url}>
                            <navItem.icon/>
                            <span>{navItem.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                        {loadDropdownActions(navItem)}
                      </SidebarMenuItem>
                    </TooltipTrigger>
                    {
                      navItem.tooltip && (
                        <TooltipContent>
                          {navItem.tooltip}
                        </TooltipContent>
                      )
                    }
                  </Tooltip>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navigation.user} />
      </SidebarFooter>
    </Sidebar>
  )
}