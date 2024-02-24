import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()
  return (
    <div>
      {session && <div>Seja bem vindo: {session?.user?.name}</div>}

      {session && JSON.stringify(session?.user)}

      {!session && <div>...não logado...</div>}
    </div>
  )
}
