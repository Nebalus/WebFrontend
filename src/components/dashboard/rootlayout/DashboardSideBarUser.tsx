import {
  ChevronsUpDown,
  HeartHandshake,
  LogOut, Mail,
  Settings, Ticket,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@assets/components/shadcnui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@assets/components/shadcnui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@assets/components/shadcnui/sidebar"
import { NavLink } from "react-router-dom"
import {APP_DASHBOARD_PATH} from "@/constants.ts";

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg"><strong>?</strong></AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg"><strong>?</strong></AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            <NavLink to={APP_DASHBOARD_PATH + "settings"}>
              <DropdownMenuItem>
                <Settings />
                Settings
              </DropdownMenuItem>
            </NavLink>
            <NavLink to="">
              <DropdownMenuItem>
                <HeartHandshake />
                Support
              </DropdownMenuItem>
            </NavLink>
            <NavLink to="">
              <DropdownMenuItem>
                <Mail />
                Invitation Program
              </DropdownMenuItem>
            </NavLink>
            <NavLink to="">
              <DropdownMenuItem>
                <Ticket />
                Tickets
              </DropdownMenuItem>
            </NavLink>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <NavLink to="/logout">
              <DropdownMenuItem>
                  <LogOut />
                  Log out
              </DropdownMenuItem>
            </NavLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
