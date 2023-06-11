"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";



export const LoginButton = (callbackUrl: any) => {
  return (
  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      onClick={() => signIn("google", { callbackUrl:  callbackUrl })}>
      Sign in with Google
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => {
      console.log("signing out");
      signOut();
      }
    }>
      Sign Out
    </button>
  );
};

