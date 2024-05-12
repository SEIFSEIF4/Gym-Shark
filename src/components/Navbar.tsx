import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SubNavBar from "./SubNavBar";
import ShoppingCartButton from "./ShoppingCartButton";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <header className="border-b min-h-16 sm:p-0 md:p-4 sm:px-5">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Gym<span className="text-primary">Shark</span>
          </h1>
        </Link>
        <SubNavBar isStore={true} />
        {/* h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 */}
        <div className="flex flex-row md:min-w-56 divide-x ">
          {user ? (
            <ShoppingCartButton Image={user?.picture} />
          ) : (
            <div className="flex flex-row items-center gap-5 sm:h-20 md:h-24">
              <LoginLink>
                <Button className="bg-foreground">Login</Button>
              </LoginLink>
              <RegisterLink>
                <Button className="text-foreground">Getting Started</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
