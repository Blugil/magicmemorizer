"use client"

import { HamburgerPopup } from "./hambuger_popup";
import { Ref, useEffect, useRef, useState } from "react";

const showMenu = () => {
  const popup = document.getElementById("ham-popup")
  popup?.classList.toggle("hidden");
}

const hideMenu = () => {
  const popup = document.getElementById("ham-popup")
  popup?.classList.remove("hidden");
}

export const Hamburger = () => {

  const menuRef = useRef(0);

  useEffect(() => {
    const ref = menuRef.current;
    let handler = (e: Event) => {
      //console.log(menuRef);
      //console.log(e.target)
      //if (!ref.contains(e.target)) {
      //  hideMenu(); 
      //}
    }
    document.addEventListener("mousedown", handler);
  });
  return (
    <>
      <button onClick={() => showMenu()}>
        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
      <div className="relative hidden" id="ham-popup">
        <HamburgerPopup />
      </div>
    </>
  );
};


