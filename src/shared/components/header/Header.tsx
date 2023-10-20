'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { NavigationMenu } from '../navigationMenu/NavigationMenu'

export function Header() {
  return (
    <Card className="mb-4 flex items-center justify-between p-[1.875rem]">
      <NavigationMenu />

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="font-extrabold text-violet-600">DX</span> Store
        </h1>
      </Link>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}
