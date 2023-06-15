import Link from 'next/link';
import { NavRight } from './nav/nav_menu';

export async function Header() {
  return (
    <nav className="w-full bg-transparent mb-16 lg:mb-24">
      <div className="flex justify-between px-4 mx-auto lg:max-w-7xl items-center flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5">
          <Link href="/">
            <h2 className="text-md lg:text-2xl text-black dark:text-white font-bold">Magic Memorizer</h2>
          </Link>
        </div>
        <NavRight />
      </div>
    </nav>
  );
}
