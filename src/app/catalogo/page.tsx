import { prismaClient } from '@/lib/prisma'
import { CatalogIcon } from '@/shared/assets/CatalogIcon'
import { BadgeSection } from '@/shared/components/badgeSection/BadgeSection'
import { CategoryItem } from './utils/CategoryItem'

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="flex flex-col gap-8 p-5">
      <BadgeSection>
        <CatalogIcon size={16} />
        Catálogo
      </BadgeSection>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  )
}
