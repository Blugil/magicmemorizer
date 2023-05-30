import {
  LoginButton,
  LogoutButton,
} from "@/components/buttons.component";


export default async function Home() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
     <ul>
        <li>
          <LoginButton />
        </li>
      </ul>
    </div>
  )
}
