import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { ProductItem } from '@/shared/components/productItem/ProductItem'
import { computeProductTotalPrice } from '@/shared/helpers/product'
import { PercentIcon } from 'lucide-react'

export default async function DealsPage() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-4 py-2 text-sm font-bold uppercase"
        variant="outline"
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            productWidthSize="full"
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}
