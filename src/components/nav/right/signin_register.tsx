"use client"

import { signIn, signOut } from "next-auth/react";

export const SigninRegister = () => {
  return (
    <ul className="flex flex-wrap items-center justify-between mb-6 text-gray-900 dark:text-white">
      <li className="mr-4">
        <button style={{ marginRight: 10 }} onClick={() => {
          console.log("signing in");
          signIn();
          }
        }>
         Login
        </button>
      </li>
      <li>
        <button style={{ marginRight: 10 }} onClick={() => {
          console.log("signing out");
          signIn();
          }
        }>
          Register
        </button>
      </li>
    </ul>
  );
};

