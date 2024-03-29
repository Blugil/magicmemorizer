import GoogleSignInButton, {
  LoginButton,
  LogoutButton,
} from "@/components/buttons";
import { headers } from "next/headers";
import Image from "next/image";


export default async function Login() {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Magic Memorizer"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="flex flex-col items-center mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <GoogleSignInButton />
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
