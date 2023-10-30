import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Home,
  ListOrderedIcon,
  LogInIcon,
  LogOut,
  MenuIcon,
  PercentIcon,
  ShoppingBasket,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { UserProfile } from './UserProfile'

export function NavigationMenu() {
  const { status } = useSession()

  const handleLoginClick = async () => {
    await signIn()
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-semibold">
          Menu
        </SheetHeader>

        <div className="flex h-full flex-col justify-between">
          <div className="mt-2 flex flex-col gap-2">
            {status === 'unauthenticated' && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
            )}

            {status === 'authenticated' && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOut size={16} />
                Sair da conta
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Home size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            {status === 'authenticated' && (
              <SheetClose asChild>
                <Link href="/pedidos">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ShoppingBasket size={16} />
                    Meus pedidos
                  </Button>
                </Link>
              </SheetClose>
            )}

            <SheetClose asChild>
              <Link href="/ofertas">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/catalogo">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
          <footer>
            <UserProfile />
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  )
}
