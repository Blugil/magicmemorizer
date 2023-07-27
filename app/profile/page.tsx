import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }
  if (session?.user?.email === process.env.ADMIN_EMAIL) {
    return (
      <div className="z-10 w-full max-w-5xl items-center justify-around font-mono text-sm lg:text-xl flex text-black dark:text-white">
        Welcome Administrator
      </div>
    );
  }
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-around font-mono text-sm lg:text-xl flex text-black dark:text-white">
      This is the profile page!
    </div>
  );
}
