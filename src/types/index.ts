export type ProductImage = {
  url: string
}

export type Product = {
  id: number
  title: string
  price: number
  rating: number
  image: ProductImage
}
