'use client'

import { Product } from '@prisma/client'
import { createContext, ReactNode, useState } from 'react'

interface CartProduct extends Product {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductToCart: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProductToCart: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<CartProduct[]>([])

  const addProductToCart = (product: CartProduct) => {
    setProducts((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider
      value={{
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        addProductToCart,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
