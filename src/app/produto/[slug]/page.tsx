import { ParamsProps } from '@/app/categoria/[slug]/page'
import { prismaClient } from '@/lib/prisma'
import { ProductList } from '@/shared/components/productList/ProductList'
import { computeProductTotalPrice } from '@/shared/helpers/product'
import { ProductImages } from './utils/ProductImages'
import { ProductInfo } from './utils/ProductInfo'

export default async function ProductDetailsPage({
  params: { slug },
}: ParamsProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  })

  if (!product) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages
        imagesIUrls={product.imageUrls}
        productName={product.name}
      />

      <ProductInfo product={computeProductTotalPrice(product)} />

      <div className="flex flex-col gap-2">
        <h2 className="px-5 font-bold uppercase">PRODUTOS RECOMENDADOS</h2>
        <ProductList products={product.category.products} />
      </div>
    </div>
  )
}