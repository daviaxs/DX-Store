import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'

export function UserProfile() {
  const { data } = useSession()

  if (!data?.user) {
    return
  }

  return (
    <div className="mb-2 flex items-center gap-4 rounded-lg bg-zinc-900 p-2">
      <Avatar>
        <AvatarFallback>{data.user.name?.[0].toUpperCase()}</AvatarFallback>

        {data.user.image && <AvatarImage src={data.user.image} />}
      </Avatar>
      <div className="flex flex-col">
        <p className="font-medium">{data.user.name}</p>
        <p className="text-sm font-thin opacity-70">Boas compras!</p>
      </div>
    </div>
  )
}
