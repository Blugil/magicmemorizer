import {
  LoginButton,
  LogoutButton,
} from "@/components/buttons.component";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export default async function Home() {
  
  const headersList = headers();
  const referer = headersList.get('referer');
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
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
