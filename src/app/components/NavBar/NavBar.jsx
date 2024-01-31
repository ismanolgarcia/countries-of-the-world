import { ThemeToggle } from '..';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <div className="bg-SnowWhite dark:bg-DeepSteelBlue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>
          <h2 className="dark:text-white text-lg sm:xl font-bold">
            Where in the world?
          </h2>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};
