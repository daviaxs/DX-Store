import { Separator } from '@/shared/components/cartMenu/utils/Separator'
import { computeProductTotalPrice } from '@/shared/helpers/product'
import { Prisma } from '@prisma/client'
import Image from 'next/image'

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: { product: true }
  }>
  isLastItem?: boolean
}

export function OrderProductItem({
  orderProduct,
  isLastItem,
}: OrderProductItemProps) {
  const product = computeProductTotalPrice(orderProduct.product)

  return (
    <>
      <div className="flex h-[100%] flex-col items-start gap-4 sm:flex-row">
        <div className="flex h-[150px] w-full items-center justify-center rounded-lg bg-accent sm:h-[90px] sm:w-[90px]">
          <Image
            src={orderProduct.product.imageUrls[0]}
            alt={orderProduct.product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="flex w-full flex-col justify-between gap-2">
          <div className="flex w-[100%] justify-between gap-4">
            <div className="flex flex-col">
              <p>{orderProduct.product.name}</p>

              <p className="opacity-75">Qtd: {orderProduct.quantity}</p>
            </div>

            <div className="flex flex-col text-left sm:text-right">
              <p className="font-bold">
                {product.totalPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>

              {orderProduct.product.discountPercentage > 0 && (
                <div className="flex gap-1 text-xs opacity-75">
                  <p>De:</p>
                  <p className="line-through ">
                    {Number(product.basePrice).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="w-fit text-ellipsis rounded-md bg-accent px-2 py-1">
            Vendido e entregue por:{' '}
            <span className="font-semibold">DX Store</span>
          </p>
        </div>
      </div>
      {!isLastItem && <Separator />}
    </>
  )
}
