import { prismaClient } from '@/lib/prisma'
import { Categories } from './utils/Categories'
import { ProductList } from './utils/ProductList'
import { PromoBanner } from './utils/PromoBanner'
import { SectionTile } from './utils/SectionTitle'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })

  return (
    <div>
      <PromoBanner
        src="/banner_home_01.png"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTile>Ofertas</SectionTile>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner_home_02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div className="mt-8">
        <SectionTile>Teclados</SectionTile>
        <ProductList products={keyboards} />
      </div>
    </div>
  )
}
