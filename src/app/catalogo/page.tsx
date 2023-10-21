import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { CatalogIcon } from '@/shared/assets/CatalogIcon'
import { CategoryItem } from './utils/CategoryItem'

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-4 py-2 text-sm font-bold uppercase"
        variant="outline"
      >
        <CatalogIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  )
}
