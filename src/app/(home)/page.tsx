import { prismaClient } from '@/lib/prisma'
import { ProductList } from '@/shared/components/productList/ProductList'
import { SectionTile } from '@/shared/components/tituloSecao/TituloSecao'
import { Categories } from './utils/Categories'
import { PromoBanner } from './utils/PromoBanner'

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
    <div className="flex flex-col gap-8">
      <PromoBanner
        src="/banner_ofertas.png"
        alt="Até 55% de desconto esse mês!"
        className="hidden min-w-full md:flex"
        priority
      />

      <PromoBanner
        src="/banner_ofertas_mobile.png"
        alt="Até 55% de desconto esse mês!"
        className="mt-5 min-w-full px-5 md:hidden"
        priority
      />

      <div className="px-5">
        <Categories />
      </div>

      <div className="flex flex-col items-start justify-start">
        <SectionTile>Ofertas</SectionTile>
        <ProductList products={deals} />
      </div>

      <div className="grid w-full grid-cols-1 items-center justify-center gap-10 px-5 sm:px-10 md:flex md:px-0">
        <PromoBanner
          src="/banner_home_02.png"
          alt="Até 55% de desconto em mouses!"
          className="w-full md:w-[45%]"
        />

        <PromoBanner
          src="/banner_home_03.png"
          alt="Até 20% de desconto em fones!"
          className="w-full md:w-[45%]"
        />
      </div>

      <div className="">
        <SectionTile>Mouses</SectionTile>
        <ProductList products={mouses} />
      </div>

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
