import { getServerSession } from "next-auth";
import { ProfileButton } from "./right/profile_button";
import { SigninRegister } from "./right/signin_register";
import { authOptions } from "@/lib/auth";

export async function NavRight() {
  
  const session = await getServerSession(authOptions);
  let button: any = <ProfileButton />
  if (!session) {
    button = <SigninRegister />
  }
  return (
    <div className="font-mono text-sm">
      {button}
    </div>
  );
};

