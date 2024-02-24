import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Server() {
  const session = await getServerSession()
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl text-white">Server page</h1>
      <div> Recuperando sessao lado SERVER: {session?.user?.name}</div>
    </div>
  )
}
