import { prismaClient } from '@/lib/prisma'
import { ProductList } from '@/shared/components/productList/ProductList'
import { Categories } from './utils/Categories'
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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'headphones',
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
    <div className="mt-4 flex flex-col gap-8">
      <PromoBanner
        src="/banner_home_01.png"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div className="">
        <SectionTile>Ofertas</SectionTile>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner_home_02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div className="">
        <SectionTile>Mouses</SectionTile>
        <ProductList products={mouses} />
      </div>

      <PromoBanner
        src="/banner_home_03.png"
        alt="Até 20% de desconto em fones!"
      />

      <div className="">
        <SectionTile>Fones</SectionTile>
        <ProductList products={headphones} />
      </div>

      <div className="">
        <SectionTile>Teclados</SectionTile>
        <ProductList products={keyboards} />
      </div>
    </div>
  )
}
