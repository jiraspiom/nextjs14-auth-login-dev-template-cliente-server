import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function NavBar() {
  const session = await getServerSession()

  if (!session) {
    return (
      <nav className="bg-slate-500 p-4">
        <ul className="flex justify-evenly text-lg font-bold">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/api/auth/signin">Sing in</Link>
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <nav className="bg-slate-500 p-4">
      <ul className="flex justify-evenly text-lg font-bold">
        <li>
          <Link href="/">HOME</Link>
        </li>
        {/* <li>
          <Link href="/api/auth/signin">Sing in</Link>
        </li> */}
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/outra">Outra</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sing out</Link>
        </li>
      </ul>
    </nav>
  )
}
