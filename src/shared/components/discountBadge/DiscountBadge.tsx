import { Badge, BadgeProps } from '@/components/ui/badge'
import { ArrowDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export function DiscountBadge({ children, className, ...props }: BadgeProps) {
  return (
    <Badge className={twMerge('px-2 py-[2px]', className)} {...props}>
      <ArrowDown size={12} />
      {children}%
    </Badge>
  )
}
