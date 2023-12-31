import { prismaClient } from '@/lib/prisma'
import { BadgeSection } from '@/shared/components/badgeSection/BadgeSection'
import { ProductItem } from '@/shared/components/productItem/ProductItem'
import { CATEGOTY_ICON } from '@/shared/constants/categoryIcon'
import { computeProductTotalPrice } from '@/shared/helpers/product'

export interface ParamsProps {
  params: {
    slug: string
  }
}

export default async function CategoryProduct({
  params: { slug },
}: ParamsProps) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug,
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
      <BadgeSection>
        {CATEGOTY_ICON[slug as keyof typeof CATEGOTY_ICON]}
        {category.name}
      </BadgeSection>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            product={computeProductTotalPrice(product)}
            productWidthSize="full"
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}
