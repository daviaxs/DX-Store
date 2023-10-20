import { Badge } from '@/components/ui/badge'
import { CATEGOTY_ICON } from '@/shared/constants/categoryIcon'
import { Category } from '@prisma/client'
import Link from 'next/link'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link href={`/categoria/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        {CATEGOTY_ICON[category.slug as keyof typeof CATEGOTY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  )
}
