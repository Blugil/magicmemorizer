"use client"
import { ProfileButton } from "./right/profile_button";
import { SigninRegister } from "./right/signin_register";
import { Hamburger } from "./right/hamburger";
import { useSession } from "next-auth/react";

export function NavRight() {

  const { data: session, status } = useSession()
  let button: any = <ProfileButton />
  if (!session) {
    button = <SigninRegister />
  }
  return (
   <div className="font-mono text-sm">
    <div className="hidden lg:block">
        {button}
      </div>
      <div className="flex justify-between px-4 mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-8">
        <div className="visible lg:hidden flex items-center justify-between py-3 md:py-5 md:block">
          <Hamburger session={session} />
        </div>
      </div>
    </div>
  );
};

