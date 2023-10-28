import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { Prisma } from '@prisma/client'
import { format } from 'date-fns'

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: true
    }
  }>
}

export function OrderItem({ order }: OrderItemProps) {
  const statusText = () => {
    if (order.status === 'WAITING_FOR_PAYMENT') {
      return <span className="text-red-500">Não pago</span>
    } else {
      return <span className="text-green-400">Pago</span>
    }
  }

  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              {order.orderProducts.length === 1
                ? `Pedido com ${order.orderProducts.length} produto`
                : `Pedido com ${order.orderProducts.length} produtos`}
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-4">
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}
