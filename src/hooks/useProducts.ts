import { useEffect, useState } from 'react'

import { Product } from '../types'

import { helperNotify } from '../helpers/helperNotify'

interface useProductsProps {
  products: Product[]
  totalProducts: number
}

export function useProducts({ products, totalProducts }: useProductsProps) {
  const productsPerPage = 6
  const maxAddProduct = 5
  const initialProductSelectQty = 1
  const [page, setPage] = useState(1)
  const [allProducts, setAllProducts] = useState<Product[]>(products)
  const [currentPageProducts, setCurrentPageProducts] = useState<Product[]>([])

  const [productSelectQty, setProductSelectQty] = useState(
    products.map((item) => initialProductSelectQty)
  )
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    const newProducts = [...allProducts].slice(
      (page - 1) * productsPerPage,
      (page - 1) * productsPerPage + productsPerPage
    )
    setCurrentPageProducts(newProducts)
  }, [allProducts, page])

  function handleSelectProductQtyChange(
    event: React.ChangeEvent<HTMLSelectElement>,
    productIndex: number
  ) {
    const value = event.target.value
    const newProductSelectQty = [...productSelectQty]
    newProductSelectQty[productIndex] = parseInt(value)
    setProductSelectQty(newProductSelectQty)
  }

  function handleAddToCart(
    event: React.MouseEvent<HTMLElement>,
    selectedProduct: Product,
    productIndex: number
  ) {
    const { price } = selectedProduct
    const quantity = productSelectQty[productIndex]
    setSubTotal((prevTotal) => prevTotal + price * quantity)
    for (var i = 0; i < quantity; i++) {
      setCartItems((prevItems) => [...prevItems, selectedProduct])
    }

    helperNotify(
      'success',
      'Added to cart successfully!',
      'success-message-added-to-cart',
      2000
    )

    const clickedButton = event.currentTarget as HTMLButtonElement
    clickedButton.disabled = true
    clickedButton.textContent = '✅ Added'
    setTimeout(() => {
      clickedButton.textContent = 'Add to Cart'
      clickedButton.disabled = false
    }, 2000)
  }

  return {
    productsPerPage,
    maxAddProduct,
    initialProductSelectQty,
    page,
    setPage,
    allProducts,
    setAllProducts,
    currentPageProducts,
    setCurrentPageProducts,
    productSelectQty,
    setProductSelectQty,
    cartItems,
    setCartItems,
    subTotal,
    setSubTotal,
    handleSelectProductQtyChange,
    handleAddToCart
  }
}
