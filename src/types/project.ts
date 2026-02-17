export default interface Project {
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
}

