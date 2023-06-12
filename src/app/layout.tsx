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
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
