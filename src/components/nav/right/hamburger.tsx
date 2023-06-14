"use client"

import { signIn } from "next-auth/react";
import { HamburgerPopup } from "./hambuger_popup";

const showMenu = () => {
  const popup = document.getElementById("ham-popup")
  popup?.classList.toggle("hidden");
}

export const Hamburger = (session: any) => {
  return (
    <div>
      <button onClick={() => showMenu()}>
        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
      <div className="relative hidden" id="ham-popup">
        <HamburgerPopup />
      </div>
    </div>
  );
};


