import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { BadgeSection } from '@/shared/components/badgeSection/BadgeSection'
import { ShoppingBasket } from 'lucide-react'
import { Session, getServerSession } from 'next-auth'
import { OrderItem } from './utils/OrderItem'

export const dynamic = 'force-dynamic'

interface User {
  name: string | null
  email: string | null
  image: string | null
  id: string
}

interface CustomSession extends Session {
  user: User
}

export default async function OrdersPage() {
  const session = (await getServerSession(authOptions)) as CustomSession

  if (!session || !session.user) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1>Acesso negado!</h1>
        <p>Faça login para ver seus pedidos</p>
      </div>
    )
  }

  const orders = await prismaClient.order.findMany({
    where: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  })

  if (orders.length === 0) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1>Nenhum pedido encontrado!</h1>
        <p>Faça uma compra para ver seus pedidos</p>
      </div>
    )
  }

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
