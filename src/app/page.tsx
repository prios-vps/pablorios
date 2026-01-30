import NavBar from "../components/navbar";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <header className="flex justify-between items-center mb-12 gap-5">
        <div id="hero">
          <h1 className="text-4xl ncm10serif font-bold not-italic">Pablo Ariel Ríos Pérez</h1>
          <h2 className="text-xl text-gray-800 dark:text-gray-400 mt-2 ncm10serif font-medium italic">
            Software Engineer & DevOps | Rigor lógico aplicado al desarrollo de
            sistemas.
          </h2>
        </div>
        <NavBar />
      </header>

      <section className="grid gap-8">
        {/* Caso de Estudio: Restaurante */}
        <div className="border-l-4 pl-4">
          <h2 className="text-2xl font-semibold">
            Modernización de Sistemas Legacy
          </h2>
          <p className="mt-2">
            Desarrollo de una arquitectura distribuida (React + PHP) que
            interactúa mediante ingeniería inversa con bases de datos de
            sistemas críticos en VB5.
          </p>
          <span className="text-sm font-mono p-1">
            #BlackBoxAnalysis #React #MySQL
          </span>
        </div>

        {/* Experiencia: SysAdmin */}
        <div className="border-l-4 pl-4">
          <h2 className="text-2xl font-semibold">
            Infraestructura y Continuidad
          </h2>
          <p className="mt-2">
            Gestión de bases de datos empresariales con enfoque en integridad
            absoluta. Implementación de despliegues automáticos (OTA) en redes
            LAN.
          </p>
          <span className="text-sm font-mono p-1">
            #DevOps #Nginx #SysAdmin
          </span>
        </div>
      </section>

      <footer className="mt-20 border-t pt-8">
        <p>
          Investigación matemática y académica:{" "}
          <a href="https://orcid.org/0009-0001-2449-3685" className="text-blue-500 underline">
            ORCID iD
          </a>
        </p>
      </footer>
    </main>
  );
}
