'use client'

import { Button } from '@/components/ui/button'
import { CartContext } from '@/providers/cart'
import { DiscountBadge } from '@/shared/components/discountBadge/DiscountBadge'
import { ProductWithTotalPrice } from '@/shared/helpers/product'
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from 'lucide-react'
import { useContext, useState } from 'react'

interface ProductInfoProps {
  product: ProductWithTotalPrice
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const { addProductToCart } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1))
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity })
  }

  return (
    <div className="mt-4 flex flex-col px-5 lg:m-5 lg:h-[500px] lg:w-full lg:rounded-lg lg:bg-accent lg:py-8">
      <div className="lg-gap-2 lg:flex lg:flex-col lg:gap-2">
        <h2 className="text-lg">{product.name}</h2>

        <span>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">
              R$ {product.totalPrice.toFixed(2).replace('.', ',')}
            </h1>

            {product.discountPercentage > 0 && (
              <DiscountBadge>{product.discountPercentage}</DiscountBadge>
            )}
          </div>

          {product.discountPercentage > 0 && (
            <p className="text-sm line-through opacity-50">
              R$ {Number(product.basePrice).toFixed(2).replace('.', ',')}
            </p>
          )}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <Button
        className="mt-4 font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-4 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">
          {product.description.slice(0, 450)}.
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg bg-accent px-5 py-2 lg:bg-[#2A2A2A]">
        <div className="flex items-center gap-4">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-violet-400">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-sm font-bold">Frete Grátis</p>
      </div>
    </div>
  )
}
