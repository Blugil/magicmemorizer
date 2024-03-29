import Game from "@/components/game";
import GameProvider from "@/components/game/gameProvider";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Play() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/random");
  }
  return (
    <div className="z-10 w-full max-w-5xl flex items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
      <div className="z-10 max-w-5xl flex-col text-center items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
        <GameProvider>
          <Game />
        </GameProvider>
      </div>
    </div>
  );
}
