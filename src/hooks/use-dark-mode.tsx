'use client';

import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  // 1. Iniciamos en false para que coincida el render del servidor y el cliente
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // 2. Aquí ya estamos en el navegador, window sí existe
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Seteamos el valor inicial real
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isDarkMode;
};
