export interface Project {
  id: number
  title: string
  subtitle?: string
  tags: string[]
  description: string
  url: string
  sourceUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Toma de Pedidos para Restaurante',
    subtitle: 'Integración con base de datos legacy y flujo completo de comandas',
    description: 'Sistema de toma de pedidos para garzones con gestión de salones, mesas y comandas, búsqueda de productos, cálculo automático de totales y envío de pedidos a cocina mediante impresión automática de tickets, integrado a base de datos legacy existente.',
    tags: ['#React', '#PHP', '#MySQL', '#LegacyIntegration', '#ReverseEngineering'],
    url: 'https://restaurant.pablorios.cl'
  }
];
