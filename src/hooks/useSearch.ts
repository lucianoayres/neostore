import { useState } from 'react'
import { Product } from '../types'

interface useSearchProps {
  allProducts: Product[]
  currentPageProducts: Product[]
}

export function useSearch({
  allProducts,
  currentPageProducts
}: useSearchProps) {
  const [search, setSearch] = useState('')
  // Search logic
  const searchQueryLowerCase = search.trim().toLocaleLowerCase()
  let filteredProducts: Product[] = []

  if (searchQueryLowerCase.length >= 1) {
    filteredProducts = allProducts.filter((item) =>
      item.title.toLocaleLowerCase().includes(searchQueryLowerCase)
    )
  } else {
    filteredProducts = currentPageProducts
  }
  // end of Search Logic

  function clearSearch() {
    setSearch('')
    filteredProducts = currentPageProducts
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setSearch(value)
  }

  return {
    search,
    setSearch,
    clearSearch,
    handleSearchChange,
    filteredProducts
  }
}
