import { Badge } from '@/components/ui/badge'
import { ProductWithTotalPrice } from '@/shared/helpers/product'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-4 top-4 px-2 py-[2px]">
            <ArrowDown size={12} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 && (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2).replace('.', ',')}
              </p>

              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2).replace('.', ',')}
              </p>
            </>
          )}

          {product.discountPercentage === 0 && (
            <p className="font-semibold">
              R$ {Number(product.basePrice).toFixed(2).replace('.', ',')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
