"use client"

import { LoginButton, RegisterButton } from "@/components/buttons";

export const SigninRegister = () => {
  return (
    <div>
      <ul className="flex flex-wrap items-center justify-between text-black dark:text-white">
        <li className="mr-4">
          <LoginButton />
        </li>
        <li>
          <RegisterButton />
        </li>
      </ul>
    </div>
  );
};

