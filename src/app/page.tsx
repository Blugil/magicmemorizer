import {
  LoginButton,
  LogoutButton,
} from "@/components/buttons.component";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export default async function Home() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-around font-mono text-sm lg:flex">
     Welcome to the home page!
    </div>
  )
}
