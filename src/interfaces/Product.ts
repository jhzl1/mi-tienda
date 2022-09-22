export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

export type ItemToCart = Pick<Product, "image" | "price" | "title"> & {
  quantity: number
}

export type ProductOnCart = ItemToCart & {
  id: string
}
