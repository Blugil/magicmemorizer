"use client"
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";



export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => {
      console.log("signing in");
      signIn();
      }
    }>
     Sign In 
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => {
      console.log("signing out");
      signOut();
      }
    }>
      Sign Out
    </button>
  );
};



import { useSearchParams } from 'next/navigation'


const GoogleSignInButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl: string = searchParams.get('callbackUrl') || '/'
  console.log(callbackUrl)

  return (
    <button type="button" onClick={() => signIn('google', { callbackUrl: callbackUrl})} className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
  )
}

export default GoogleSignInButton
