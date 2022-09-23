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

export type ItemToCart = Pick<Product, "image" | "price" | "title" | "id"> & {
  quantity: number
}

export type UpdateProduct = Pick<Product, "id"> & Pick<ItemToCart, "quantity">
