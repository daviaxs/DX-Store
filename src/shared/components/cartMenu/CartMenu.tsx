'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CartContext } from '@/providers/cart'
import { computeProductTotalPrice } from '@/shared/helpers/product'
import { ShoppingCartIcon } from 'lucide-react'
import { useContext } from 'react'
import { CartItem } from './utils/CartItem'

export function CartMenu() {
  const { products } = useContext(CartContext)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <div className="flex flex-col gap-8">
          <Badge
            className="w-fit gap-1 border-2 border-primary px-4 py-2 text-sm font-bold uppercase"
            variant="outline"
          >
            <ShoppingCartIcon size={16} />
            Carrinho
          </Badge>

          <div className="flex flex-col gap-5">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product as any) as any}
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
