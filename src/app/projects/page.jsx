export default function Projects() {
  return (
    <section className="grid gap-8">
      {/* Caso de Estudio: Restaurante */}
      <div className="border-l-4 pl-4">
        <h2 className="text-2xl font-semibold">
          Modernización de Sistemas Legacy
        </h2>
        <p className="mt-2">
          Desarrollo de una arquitectura distribuida (React + PHP) que
          interactúa mediante ingeniería inversa con bases de datos de sistemas
          críticos en VB5.
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
        <span className="text-sm font-mono p-1">#DevOps #Nginx #SysAdmin</span>
      </div>
    </section>
  );
}
