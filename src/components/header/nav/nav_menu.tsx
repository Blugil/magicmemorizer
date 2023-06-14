"use client"

import { ProfileButton } from "./menu/profile_button";
import { SigninRegister } from "./menu/signin_register";
import { Hamburger } from "./menu/hamburger";
import { useSession } from "next-auth/react";
import { ThemeSelect } from "./menu/theme_selector";

export function NavRight() {

  const { data: session, status } = useSession()

  let button: any = <ProfileButton />
  if (!session) {
    button = <SigninRegister />
  }
  return (
   <div className="flex space-around font-mono text-sm">
    <div className="hidden lg:block">
      {button}
    </div>
    <div className="visible lg:hidden flex justify-between items-center mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-4">
        <Hamburger />
    </div>
    <div className="flex justify-between  mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-4">
      <ThemeSelect />
    </div>
  </div>
  );
};

