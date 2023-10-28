import { Badge } from '@/components/ui/badge'
import { ReactNode } from 'react'

export function BadgeSection({ children }: { children: ReactNode }) {
  return (
    <Badge
      className="w-fit gap-1 border-2 border-primary px-4 py-2 text-sm font-bold uppercase"
      variant="outline"
    >
      {children}
    </Badge>
  )
}
