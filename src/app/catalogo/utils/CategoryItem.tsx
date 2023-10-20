import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryItemsProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemsProps) {
  return (
    <Link href={`/categoria/${category.slug}`}>
      <div className="flex flex-col">
        <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-t-lg">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className="rounded-b-lg bg-accent py-3">
          <p className="text-semibold text-center text-sm">{category.name}</p>
        </div>
      </div>
    </Link>
  )
}
