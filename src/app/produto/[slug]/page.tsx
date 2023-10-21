import { ParamsProps } from '@/app/categoria/[slug]/page'
import { prismaClient } from '@/lib/prisma'
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
  })

  if (!product) {
    return null
  }

  return (
    <div className="flex flex-col gap-8">
      <ProductImages
        imagesIUrls={product.imageUrls}
        productName={product.name}
      />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </div>
  )
}
