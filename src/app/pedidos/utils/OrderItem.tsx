import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { Separator } from '@/shared/components/cartMenu/utils/Separator'
import { Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { useMemo } from 'react'
import { OrderProductItem } from './OrderProductItem'

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  }>
}

export function OrderItem({ order }: OrderItemProps) {
  const subTotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      )
    }, 0)
  }, [order.orderProducts])

  const discount = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc +
        Number(orderProduct.product.basePrice) *
          (orderProduct.product.discountPercentage / 100) *
          orderProduct.quantity
      )
    }, 0)
  }, [order.orderProducts])

  const total = useMemo(() => {
    return subTotal - discount
  }, [subTotal, discount])

  const statusText = () => {
    if (order.status === 'WAITING_FOR_PAYMENT') {
      return <span className="text-red-500">Pendente</span>
    } else {
      return <span className="text-green-400">Pago</span>
    }
  }

  return (
    <Card className="px-5 hover:bg-[#101010]">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <h2>
                {order.orderProducts.length === 1
                  ? `Pedido com ${order.orderProducts.length} produto`
                  : `Pedido com ${order.orderProducts.length} produtos`}
              </h2>
              <p className="text-xs opacity-75">
                Feito em {format(order.createdAt, 'd/MM/y')}{' '}
              </p>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 justify-between gap-4 sm:flex">
                <div className="flex flex-col font-bold">
                  <span className="uppercase">Status</span>
                  {statusText()}
                </div>

                <div className="flex flex-col font-bold">
                  <span className="uppercase">Data</span>
                  <span className="font-light opacity-75">
                    {format(order.createdAt, 'd/MM/y')}
                  </span>
                </div>

                <div className="flex flex-col font-bold">
                  <span className="uppercase">Pagamento</span>
                  <span className="font-light opacity-75">Cartão</span>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-5">
                {order.orderProducts.map((orderProduct, index) => (
                  <OrderProductItem
                    key={orderProduct.id}
                    orderProduct={orderProduct}
                    isLastItem={index === order.orderProducts.length - 1}
                  />
                ))}
              </div>

              <div className="flex w-full flex-col gap-1 text-xs">
                <Separator />

                <div className="flex w-full justify-between py-3">
                  <p>Subtotal</p>
                  <p>
                    {subTotal.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3">
                  <p>Entrega</p>
                  <p className="uppercase">GRÁTIs</p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3">
                  <p>Descontos</p>
                  <p>
                    {discount.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3 text-sm font-bold">
                  <p>Total</p>
                  <p>
                    {total.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}
