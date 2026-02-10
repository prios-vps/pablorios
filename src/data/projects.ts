export interface ProjectDetails {
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
    }
  },
  {
    id: 2,
    title: 'Programa para toma de inventario de hardware',
    subtitle: 'Escaner de hardware, imoresoras conectadas y registro de datos en Excel',
    description: 'Aplicación gráfica probada en entornos Windows, escrita en Python + Tkinter, con el fin de capturar información acerca del hardware del equipo. Usa Pandas para procesar los datos y convertirlos a xlsx gracias a openpyxl. También es capaz de escanear las impresoras conectadas al equipo por red.',
    url: {
      details: 'escaner',
      download: 'https://descargas.pablorios.cl/Escaner.zip'
    }
  },
  {
    id: 3,
    title: 'Automatizador de informes en Excel',
    subtitle: 'Integración con base de datos legacy y flujo completo de comandas',
    description: 'Sistema de toma de pedidos para garzones con gestión de salones, mesas y comandas, búsqueda de productos, cálculo automático de totales y envío de pedidos a cocina mediante impresión automática de tickets, integrado a base de datos legacy existente.',
    url: {
      details: 'restaurant',
      demo: 'https://restaurant.pablorios.cl'
    }
  }
];
