import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react'

export function Header() {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="purple-gradient font-extrabold">DX</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}
