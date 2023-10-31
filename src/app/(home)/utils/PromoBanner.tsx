import Image, { ImageProps } from 'next/image'
import { twMerge } from 'tailwind-merge'

export function PromoBanner({ alt, className, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      height={0}
      width={0}
      className={twMerge('h-auto w-full object-contain', className)}
      sizes="100vw"
      priority
    />
  )
}
