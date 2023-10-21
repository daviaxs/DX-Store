import { ProductItem } from '@/shared/components/productItem/ProductItem'
import { computeProductTotalPrice } from '@/shared/helpers/product'
import { Product } from '@prisma/client'

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="max-w-170px w-[170px]">
          <ProductItem
            product={computeProductTotalPrice(product)}
            productWidthSize="[170px]"
          />
        </div>
      ))}
    </div>
  )
}