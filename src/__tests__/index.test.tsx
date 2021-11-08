/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

const products = [
  {
    id: 1,
    title: 'headphones',
    price: 79.85,
    rating: 5,
    image: {
      url: 'images/headphones.png'
    }
  }
]

const totalProducts = products.length

describe('Home', () => {
  it('renders Home page and checks product title', () => {
    render(<Home products={products} totalProducts={totalProducts} />)

    const productTitle = screen.getByText('headphones')

    expect(productTitle).toBeInTheDocument()
  })
})
