import { getServerSession } from 'next-auth'
import './globals.css'
import { Inter } from 'next/font/google'
import {
  Nav,
} from "@/components/nav.component";
import { authOptions } from '@/lib/auth'
//import { redirect } from 'next/dist/server/api-utils'
import { redirect } from 'next/navigation'
import Provider from '@/components/provider';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MagicMemorizer',
  description: 'created by @Blugil',
}

export default async function RootLayout({
  children,
  }: {
    children: React.ReactNode
  }) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="flex min-h-screen flex-col items-center">
            {/* @ts-expect-error Server Component tracked issue here: https://github.com/vercel/next.js/issues/42292*/}
            <Header session={session}/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
