import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { BadgeSection } from '@/shared/components/badgeSection/BadgeSection'
import { ShoppingBasket } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { OrderItem } from './utils/OrderItem'

export default async function OrdersPage() {
  const user = getServerSession(authOptions)

  if (!user) {
    return <p>Acesso negado</p>
  }

  const orders = await prismaClient.order.findMany({
    where: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userId: (user as any).id,
    },
    include: {
      orderProducts: true,
    },
  })

  return (
    <div className="flex flex-col gap-5 p-5">
      <BadgeSection>
        <ShoppingBasket size={16} />
        Meus pedidos
      </BadgeSection>

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}
