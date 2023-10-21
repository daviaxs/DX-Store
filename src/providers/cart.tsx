'use client'

import { Product } from '@prisma/client'
import { createContext, ReactNode } from 'react'

interface CartProduct extends Product {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
}

const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
})

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <CartContext.Provider
      value={{
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        products: [],
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
