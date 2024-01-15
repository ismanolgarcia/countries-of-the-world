'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import moonIcon from '/public/icons/icons8-luna-64.png';
import sunDarkIcon from '/public/icons/icons8-sol-48-dark.png';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme == 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={handleChangeTheme}
      className="flex items-center capitalize gap-2 px-4 py-2 rounded hover:bg-MediunGray dark:text-SnowWhite hover:text-SnowWhite"
    >
      <Image
        src={theme == 'dark' ? moonIcon : sunDarkIcon}
        alt="icon moon"
        width={25}
        height={25}
      />
      {theme} mode
    </button>
  );
};
