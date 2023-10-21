'use client'

import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { CartMenu } from '../cartMenu/CartMenu'
import { NavigationMenu } from '../navigationMenu/NavigationMenu'

export function Header() {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <NavigationMenu />

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="font-extrabold text-violet-600">DX</span> Store
        </h1>
      </Link>

      <CartMenu />
    </Card>
  )
}
