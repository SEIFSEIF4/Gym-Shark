import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideNavbar from "@/components/SideNavbar";
import SubNavBar from "@/components/SubNavBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function MainNavbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <header className="border-b py-3">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl font-bold">
              Gym<span className="text-primary">Shark</span>
            </h1>
          </Link>
          <SubNavBar isStore={false} />
          <div className="flex items-center gap-5 h-12 sm:h-20 md:h-24">
            <ModeToggle />
            <Sheet>
              <SheetTrigger className="max-w-[40px] max-h-[40px] p-[5px] border-1 rounded-md">
                <Menu />
              </SheetTrigger>
              <SheetContent className="max-w-[250px]">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <h1 className="text-2xl md:text-4xl font-bold">
                        Gym<span className="text-primary">Shark</span>
                      </h1>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <SideNavbar username={user?.family_name} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
