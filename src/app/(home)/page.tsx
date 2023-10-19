import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'
import { Categories } from './utils/Categories'
import { ProductList } from './utils/ProductList'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <div>
      <Image
        src="/banner_home_01.png"
        alt="Até 55% de desconto esse mês!"
        height={0}
        width={0}
        className="mt-2 h-auto w-full px-5"
        sizes="100vw"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  )
}
