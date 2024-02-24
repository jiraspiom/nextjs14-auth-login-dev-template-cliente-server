'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Client() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    },
  })

  if (status !== 'authenticated') return

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl text-white">Cliente page</h1>
      <div> Recuperando sessao lado CLIENTE: {session?.user?.name}</div>
    </div>
  )
}
