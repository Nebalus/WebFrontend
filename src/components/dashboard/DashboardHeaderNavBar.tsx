
import {Button} from "@assets/components/shadcnui/button.tsx";
import {NavLink} from "react-router-dom";
import {Avatar, AvatarFallback} from "@radix-ui/react-avatar";
import ThemeToggle from "@/components/dashboard/ThemeToggle.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@assets/components/shadcnui/dropdown-menu.tsx";

export default function DashboardHeaderNavBar() {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="flex gap-2 ml-auto">
                <ThemeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="lg" className="rounded-full">
                            <Avatar>
                                <AvatarFallback>TE</AvatarFallback>
                            </Avatar>
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Support</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <NavLink to="/logout">
                            <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
                        </NavLink>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
);
}