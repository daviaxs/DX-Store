import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { ProductItem } from '@/shared/components/productItem/ProductItem'
import { CATEGOTY_ICON } from '@/shared/constants/categoryIcon'
import { computeProductTotalPrice } from '@/shared/helpers/product'

interface ParamsProps {
  slug: string
}

export default async function CategoryProduct({
  params,
}: {
  params: ParamsProps
}) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-4 py-2 text-base font-bold uppercase"
        variant="outline"
      >
        {CATEGOTY_ICON[params.slug as keyof typeof CATEGOTY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            product={computeProductTotalPrice(product)}
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}
