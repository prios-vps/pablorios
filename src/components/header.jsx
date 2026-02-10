// 'use client'
// import { usePathname } from "next/navigation";

import NavBar from "./navbar";

export default function Header() {
  // const pathname = usePathname();
  // const isHome = pathname === '/';

  return (
    <header className="flex flex-col min-sm:flex-row justify-between items-center mb-12 gap-5">
      <div id="hero">
        <h1 className="text-4xl ncm10serif font-bold not-italic">Pablo Ariel Ríos Pérez</h1>
        <h2 className="text-xl text-gray-800 dark:text-gray-400 mt-2 ncm10serif font-medium italic">
          Software Engineer & DevOps | Rigor lógico aplicado al desarrollo de
          sistemas.
        </h2>
      </div>
      <NavBar />
    </header>
  );
}
