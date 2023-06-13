import Link from 'next/link';
import { NavRight } from './nav/nav.right';

export async function Header() {
  return (
    <nav className="w-full bg-transparent mb-32">
      <div className="flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h2 className="text-2xl text-black dark:text-white font-bold">Magic Memorizer</h2>
          </Link>
        </div>
        {/* @ts-expect-error Server Component */}
        <NavRight />
      </div>
    </nav>
  );
}
