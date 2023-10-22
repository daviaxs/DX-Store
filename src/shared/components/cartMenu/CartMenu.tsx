'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CartContext } from '@/providers/cart'
import { computeProductTotalPrice } from '@/shared/helpers/product'
import { ShoppingCartIcon } from 'lucide-react'
import { useContext } from 'react'
import { CartItem } from './utils/CartItem'
import { Separator } from './utils/Separator'

export function CartMenu() {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <div className="flex h-full flex-col gap-8">
          <Badge
            className="w-fit gap-1 border-2 border-primary px-4 py-2 text-sm font-bold uppercase"
            variant="outline"
          >
            <ShoppingCartIcon size={16} />
            Carrinho
          </Badge>

          <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex h-full flex-col gap-4">
                {products.length > 0 ? (
                  products.map((product) => (
                    <CartItem
                      key={product.id}
                      product={computeProductTotalPrice(product as any) as any}
                    />
                  ))
                ) : (
                  <p className="text-center font-bold opacity-75">
                    Carrinho vazio.
                  </p>
                )}
              </div>
            </ScrollArea>
          </div>

          <div className="flex flex-col gap-3 bg-zinc-950">
            <div className="flex items-center justify-between text-xs">
              <p>Subtotal</p>
              <p>R$ {subTotal.toFixed(2).replace('.', ',')}</p>
            </div>

            <Separator />

            <div className="flex items-center justify-between text-xs">
              <p>Entrega</p>
              <p className="uppercase">Grátis</p>
            </div>

            <Separator />

            <div className="flex items-center justify-between text-xs">
              <p>Desconto</p>
              <p>R$ {totalDiscount.toFixed(2).replace('.', ',')}</p>
            </div>

            <Separator />

            <div className="flex items-center justify-between text-sm font-bold">
              <p>Total</p>
              <p>R$ {total.toFixed(2).replace('.', ',')}</p>
            </div>

            <Button className="mt-5 font-bold uppercase">
              Finalizar compra
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
