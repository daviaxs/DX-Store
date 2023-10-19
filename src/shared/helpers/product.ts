import { Product } from '@prisma/client'

interface ProductWithTotalPrice extends Product {
  totalPrice: number
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    }
  }

  // eslint-disable-next-line prettier/prettier
  const totalPrice = (Number(product.basePrice) * product.discountPercentage) / 100

  return {
    ...product,
    totalPrice,
  }
}