import {
  LoginButton,
  LogoutButton,
} from "@/components/buttons.component";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


export default async function Home() {
  //const session = await getServerSession(authOptions);
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
     Welcome to the page!
     <ul>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  )
}
