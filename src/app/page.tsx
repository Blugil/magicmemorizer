import {
  LoginButton,
  LogoutButton,
} from "@/components/buttons.component";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export default async function Home() {
  
  const session = await getServerSession(authOptions);
  let button: any = <LogoutButton />
  if (!session) {
    button = <LoginButton />
    //redirect("/api/auth/signin");
  }
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
     Welcome to the page!
     <ul>
        <li>
          {button}
        </li>
      </ul>
    </div>
  )
}
