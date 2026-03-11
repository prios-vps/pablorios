import Project from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Toma de Pedidos para Restaurante',
    subtitle: 'Integración con base de datos legacy y flujo completo de comandas',
    description: 'Sistema de toma de pedidos para garzones con gestión de salones, mesas y comandas, búsqueda de productos, cálculo automático de totales y envío de pedidos a cocina mediante impresión automática de tickets, integrado a base de datos legacy existente.',
    url: {
      details: 'restaurant',
      demo: 'https://restaurant.pablorios.cl',
      download: 'https://dl.pablorios.cl/test.zip',
      github: 'https://github.com/PabloRiosP/Google2OutlookCSVFix'
    },
  },
  {
    id: 2,
    title: 'Programa para toma de inventario de hardware',
    subtitle: 'Escaner de hardware, impresoras conectadas y registro de datos en Excel',
    description: 'Aplicación gráfica probada en entornos Windows, escrita en Python + Tkinter, con el fin de capturar información acerca del hardware del equipo. Usa Pandas para procesar los datos y convertirlos a xlsx gracias a openpyxl. También es capaz de escanear las impresoras conectadas al equipo por red.',
    url: {
      details: 'scanner',
      download: 'https://descargas.pablorios.cl/Scanner.zip'
    },
  },
  {
    id: 3,
    title: 'Automatizador de informes en Excel',
    subtitle: 'Lectura de informes provenientes de un sistema de ventas basado en IBM Informix',
    description: 'Recibe de entrada archivos en texto plano, en algunos informes son archivos con columnas separadas por pipes, y en otros informes de ancho de columna fijos destinados a impresoras de patrón de puntos. Procesa los datos usando Pandas y genera los informes terminados en formato xlsx.',
  }
];

