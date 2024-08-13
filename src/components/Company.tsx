import Cookies from "js-cookie";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Company() {
  const handleLogout = () => {
    // Clear cookies
    Cookies.remove("email"); 
    Cookies.remove("token"); 
    Cookies.remove("username"); 

    // Redirect to login page or perform additional actions
    window.location.href = "/"; // Adjust the path as needed
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-1 text-xs">
          <h1 className="flex h-6 w-6 items-center justify-center rounded bg-bug uppercase">
            si
          </h1>
          <h1 className="cursor-pointer text-sm font-medium">Simple</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={18}
            height={18}
            fill={"none"}
          >
            <path
              d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-4 w-56">
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
