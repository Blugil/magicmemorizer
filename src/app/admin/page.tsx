import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }
  if (!(session?.user?.email === process.env.ADMIN_EMAIL)) {
    redirect("/api/auth/signin?callbackUrl=/");
  }
  return (
    <div>
      <h1>This page is protected and is only for the admin</h1>
      <p>Only admin users can see this page.</p>
      <p>
        Greetings admin.
      </p>
    </div>
  )
}
