import Provider from '@/components/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'

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

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Provider>
          <main className="flex min-h-screen flex-col items-center">
            {/* @ts-expect-error Server Component tracked issue here: https://github.com/vercel/next.js/issues/42292*/}
            <Header />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
