export default interface Skill {
  // Para un correcto ordenamiento, además del
  // slug se habilita un id único. Así React
  // los ordena en un orden controlado.
  id: number
  slug: string
  name: string
  description?: string
}

