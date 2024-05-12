/* eslint-disable @next/next/no-img-element */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import { NavModeToggle } from "./NavModeToggle";

interface iAppProps {
  userImage: string | null;
}

export function UserDropdown({ userImage }: iAppProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-3 rounded-lg border px-2 py-2 lg:px-4 lg:py-2">
          <MenuIcon className="h-6 w-6 lg:h-5 lg:w-5" />

          <Image
            width={32}
            height={32}
            src={
              userImage ??
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            alt="avatar of user"
            className="hidden  h-8 w-8 rounded-full object-cover lg:block"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem className="w-full">
          <NavModeToggle />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href="/cardio">
            Cardio
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href="/meals-plan">
            Meals Plan
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutLink className="w-full">Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
