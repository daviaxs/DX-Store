'use client'

import { Button } from '@/components/ui/button'
import { DiscountBadge } from '@/shared/components/discountBadge/DiscountBadge'
import { ProductWithTotalPrice } from '@/shared/helpers/product'
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from 'lucide-react'
import { useState } from 'react'

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    'basePrice' | 'description' | 'discountPercentage' | 'totalPrice' | 'name'
  >
}

export function ProductInfo({
  product: { basePrice, description, discountPercentage, totalPrice, name },
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1))
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {totalPrice.toFixed(2).replace('.', ',')}
        </h1>

        {discountPercentage > 0 && (
          <DiscountBadge>{discountPercentage}</DiscountBadge>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-50">
          R$ {Number(basePrice).toFixed(2).replace('.', ',')}
        </p>
      )}

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

      <Button className="mt-4 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="mt-4 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
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
