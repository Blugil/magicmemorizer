"use client"
import { LogoutButton } from "@/components/buttons.component";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";


export const HamburgerPopup = () => {
  
  const { data: session, status } = useSession()

  if (session) {
    return (
      <div className="absolute right-0 z-50 w-64 h-96 bg-zinc-800 rounded p-8">
        <ul className="flex-col space-around">
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
  }
  return (
    <div className="absolute right-0 z-50 w-64 h-96 bg-zinc-800 rounded p-8">
      <ul className="flex-col space-around">
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
    </div>
  );
};


