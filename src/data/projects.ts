export interface ProjectDetails {
  id: number
  title: string
  skills: string[]
  problem: string
  solution: string
  impact?: string
}

export interface Project {
  id: number
  title: string
  subtitle?: string
  description: string
  url?: {
    details?: string
    demo?: string
    download?: string
    src?: string
  }
  details?: ProjectDetails[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Toma de Pedidos para Restaurante',
    subtitle: 'Integración con base de datos legacy y flujo completo de comandas',
    description: 'Sistema de toma de pedidos para garzones con gestión de salones, mesas y comandas, búsqueda de productos, cálculo automático de totales y envío de pedidos a cocina mediante impresión automática de tickets, integrado a base de datos legacy existente.',
    url: {
      details: 'restaurant',
      demo: 'https://restaurant.pablorios.cl'
    },
    details: [
        {
            id: 1,
            title: "Primer problema 1",
            skills: [
                "Competencia 1",
                "Competencia 2",
                "Competencia 3"
            ],
            problem: "Problema 1",
            solution: "Solución 1",
            impact: "Impacto 1"
        },
        {
            id: 2,
            title: "Segundo problema 1",
            skills: [
                "Competencia 1",
                "Competencia 3",
                "Competencia 5"
            ],
            problem: "Problema 2",
            solution: "Solución 2",
            impact: "Impacto 2"
        },
        {
            id: 3,
            title: "Tercer problema 1",
            skills: [
                "Competencia 3"
            ],
            problem: "Problema 3",
            solution: "Solución 3"
        },
        {
            id: 4,
            title: "Cuarto problema 1",
            skills: [
                "Competencia 2",
                "Competencia 4",
                "Competencia 6"
            ],
            problem: "Problema 4",
            solution: "Solución 4",
            impact: "Impacto 4"
        },
        {
            id: 5,
            title: "Quinto problema 1",
            skills: [
                "Competencia 5",
                "Competencia 6"
            ],
            problem: "Problema 5",
            solution: "Solución 5"
        },
    ]
  },
  {
    id: 2,
    title: 'Programa para toma de inventario de hardware',
    subtitle: 'Escaner de hardware, impresoras conectadas y registro de datos en Excel',
    description: 'Aplicación gráfica probada en entornos Windows, escrita en Python + Tkinter, con el fin de capturar información acerca del hardware del equipo. Usa Pandas para procesar los datos y convertirlos a xlsx gracias a openpyxl. También es capaz de escanear las impresoras conectadas al equipo por red.',
    url: {
      details: 'escaner',
      download: 'https://descargas.pablorios.cl/Escaner.zip'
    },
    details: [
        {
            id: 1,
            title: "Primer problema 2",
            skills: [
                "Competencia 1",
                "Competencia 2",
                "Competencia 3"
            ],
            problem: "Problema 1",
            solution: "Solución 1",
            impact: "Impacto 1"
        },
        {
            id: 2,
            title: "Segundo problema 2",
            skills: [
                "Competencia 1",
                "Competencia 3",
                "Competencia 5"
            ],
            problem: "Problema 2",
            solution: "Solución 2",
            impact: "Impacto 2"
        },
        {
            id: 3,
            title: "Tercer problema 2",
            skills: [
                "Competencia 3"
            ],
            problem: "Problema 3",
            solution: "Solución 3"
        },
        {
            id: 4,
            title: "Cuarto problema 2",
            skills: [
                "Competencia 2",
                "Competencia 4",
                "Competencia 6"
            ],
            problem: "Problema 4",
            solution: "Solución 4",
            impact: "Impacto 4"
        },
        {
            id: 5,
            title: "Quinto problema 2",
            skills: [
                "Competencia 5",
                "Competencia 6"
            ],
            problem: "Problema 5",
            solution: "Solución 5"
        },
    ]
  },
  {
    id: 3,
    title: 'Automatizador de informes en Excel',
    subtitle: 'Lectura de informes provenientes de un sistema de ventas basado en IBM Informix',
    description: 'Recibe de entrada archivos en texto plano, en algunos informes son archivos con columnas separadas por pipes, y en otros informes de ancho de columna fijos destinados a impresoras de patrón de puntos. Procesa los datos usando Pandas y genera los informes terminados en formato xlsx.',
    url: {
      details: 'excel',
      download: 'https://descargas.pablorios.cl/AutomatizadorExcel.zip'
    }
  }
];

