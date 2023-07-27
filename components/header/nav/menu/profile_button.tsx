"use client"

import { LogoutButton } from "@/components/buttons";
import Link from "next/link";


export const ProfileButton = () => {
  return (
    <div>
      <ul className="flex justify-between text-gray-900 dark:text-white">
        
        <li className="mr-4">
          <Link href={"/random"}>
            <button style={{ marginRight: 10 }}>
              Random
            </button>
          </Link>
        </li>
        <li className="mr-4">
          <Link href={"/profile"}>
            <button style={{ marginRight: 10 }}>
              Profile
            </button>
          </Link>
        </li>

        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

