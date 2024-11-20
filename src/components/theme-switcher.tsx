'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { changeTheme, getTheme } from '../utils/helpers';
import SnowEffect from '@/utils/snow';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string | null>(getTheme());

  // Update theme state when the theme changes
  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = getTheme();
      setTheme(currentTheme);
    };

    // Listen for theme changes
    window.addEventListener('themeChange', updateTheme);

    // Cleanup event listener
    return () => window.removeEventListener('themeChange', updateTheme);
  }, []);

  return (
    <div>
      <div>
        <button className="m-5" onClick={() => changeTheme('spring')} aria-label="Spring Theme">
          <Image src={'/images/spring.png'} alt="Spring Icon" width={80} height={80} />
        </button>
        <button className="m-5" onClick={() => changeTheme('summer')} aria-label="Summer Theme">
          <Image src={'/images/summer.png'} alt="Summer Icon" width={80} height={80} />
        </button>
        <button className="m-5" onClick={() => changeTheme('autumn')} aria-label="Autumn Theme">
          <Image src={'/images/autumn.png'} alt="Autumn Icon" width={80} height={80} />
        </button>
        <button className="m-5" onClick={() => changeTheme('winter')} aria-label="Winter Theme">
          <Image src={'/images/winter.png'} alt="Winter Icon" width={80} height={80} />
        </button>
      </div>
      {theme === 'winter' && <SnowEffect />}
    </div>
  );
}
