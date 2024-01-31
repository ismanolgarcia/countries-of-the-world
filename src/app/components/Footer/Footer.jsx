import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-SnowWhite dark:bg-DeepSteelBlue p-4 mt-20 text-center  w-full">
      <Link
        href={'https://github.com/ismanolgarcia'}
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2 className="dark:text-SnowWhite font-bold">Ismanol García</h2>
      </Link>
    </footer>
  );
};
