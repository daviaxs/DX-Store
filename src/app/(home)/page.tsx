import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner_home_01.png"
        alt="Até 55% de desconto esse mês!"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
      />
    </div>
  )
}
