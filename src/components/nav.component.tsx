import Link from 'next/link';
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/auth';
import { Session } from 'inspector';

export const Nav = (session: Session) => {
  
  if (!!session) {
    return (
      <nav className="">
        <div> 
          <Link href={"/"}>
            Home
          </Link>
        </div>
        <div> 
          <Link href={"/api/auth/signin"}>
            Signin
          </Link>
        </div>
      </nav>
    )
  }
  return (
    <nav className="">
      <div> 
        <Link href={"/"}>
          Home
        </Link>
      </div>
      <div> 
        <Link href={"/profile"}>
          Profile
        </Link>
      </div>
    </nav>
  )
}


