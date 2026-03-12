// © 2026 Pablo Ríos
// Licencia MIT
// Barra de navegación

// Este componente se ejecuta a nivel de cliente
// debido a la actualización del estilo 
'use client';

// Elementos de Node
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Elementos internos
import { skills } from '@/data/ts/skills';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/projects' },
  ...(skills.length > 0
    ? [{ name: 'Competencias', href: '/skills' }]
    : []),
  { name: 'Sobre mí', href: '/about' },
];

export default function NavBar () {
  const pathname = usePathname();

  return (
    <nav className='flex justify-end p-4'>
      <ul className='flex gap-4'>
        {navLinks.map((link) => {
          const isActive = (link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <li key={link.name}>
              <Link 
                href={link.href}
                className={`whitespace-nowrap ${isActive ? 'text-gray-900 dark:text-gray-200 font-bold' : 'text-gray-600 dark:text-gray-400'}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

