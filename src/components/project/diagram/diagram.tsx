'use client'

import { useState, useEffect } from 'react';
import { useDarkMode } from '@/hooks/use-dark-mode';

interface Props {
  name: string;
  alt: string;
  lang: 'es' | 'en'
}

export default function Diagram({ name, alt, lang='es' }: Props) {
  const [theme, setTheme] = useState('light');
  const isDark = useDarkMode();

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
  }, [isDark])

  return <img className='h-160 w-full object-scale-down' src={`/diagrams/${lang}/${theme}/${name}.svg`} alt={alt} />
}

