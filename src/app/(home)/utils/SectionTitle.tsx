import { ComponentProps } from 'react'

export function SectionTile({ children, ...props }: ComponentProps<'p'>) {
  return (
    <p className="mb-2 px-5 font-bold uppercase" {...props}>
      {children}
    </p>
  )
}
