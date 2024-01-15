import { ThemeToggle } from '..';

export const NavBar = () => {
  return (
    <div className="bg-SnowWhite dark:bg-DeepSteelBlue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="dark:text-white text-lg sm:xl font-bold">
          Where in the world?
        </h2>
        <ThemeToggle />
      </div>
    </div>
  );
};
