'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CartContext } from '@/providers/cart'
import { ShoppingCartIcon } from 'lucide-react'
import { useContext } from 'react'

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
        <div>
          <Badge
            className="w-fit gap-1 border-2 border-primary px-4 py-2 text-sm font-bold uppercase"
            variant="outline"
          >
            <ShoppingCartIcon size={16} />
            Carrinho
          </Badge>

          {products.map((product) => (
            <h1 key={product.id}>{product.name}</h1>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
