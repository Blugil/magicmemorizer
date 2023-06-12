import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  if (session?.user?.email === process.env.ADMIN_EMAIL) {
    return (
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Welcome Administrator
      </div>
    )
  }
  return (
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        This is the profile page! 
      </div>
  )
}
