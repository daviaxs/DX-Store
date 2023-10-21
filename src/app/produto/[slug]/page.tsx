import { ParamsProps } from '@/app/categoria/[slug]/page'
import { prismaClient } from '@/lib/prisma'
import { ProductImages } from './utils/ProductImages'

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
    <div>
      <ProductImages
        imagesIUrls={product.imageUrls}
        productName={product.name}
      />
    </div>
  )
}
