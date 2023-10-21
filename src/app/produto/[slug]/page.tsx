import { ParamsProps } from '@/app/categoria/[slug]/page'
import { prismaClient } from '@/lib/prisma'

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

  return <div>{product.name}</div>
}
