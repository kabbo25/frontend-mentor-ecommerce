export interface Product {
  id: string
  company: string
  name: string
  description: string
  price: number
  originalPrice: number
  discount: number
  images: string[]
  quantity?: number
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}