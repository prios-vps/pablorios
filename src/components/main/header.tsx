import T1 from '@/components/struct/t1';
import NavBar from '@/components/main/navbar';

export default function Header() {
  return (
    <header className='flex flex-col mb-3 min-[900px]:flex-row min-[900px]:mb-12 justify-between items-center gap-5'>
      <div id='hero'>
        <T1>Pablo Ariel Ríos Pérez</T1>
        <p className='text-xl text-gray-800 dark:text-gray-400 mt-2 ncm10serif font-medium italic'>
          Software Engineer & DevOps | Rigor lógico aplicado al desarrollo de sistemas.
        </p>
      </div>
      <NavBar />
    </header>
  );
}

