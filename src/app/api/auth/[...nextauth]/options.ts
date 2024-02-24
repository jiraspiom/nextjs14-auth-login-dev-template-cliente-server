import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

interface usuario {
  tokenJWT: string
  role: string
}

export const options: NextAuthOptions = {
  providers: [
    // GitHubProvider({}),
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@email.com',
        },
        password: { label: 'Password', type: 'password', placeholder: '*****' },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'Nome usuario',
          email: 'email@email.com',
          password: '123123',
          role: 'admin',
          image: 'https://avatars.githubusercontent.com/u/2248007',
          tokenJWT: 'blblsspsdslfsus',
        }
        if (
          user &&
          user?.email === credentials?.email &&
          user?.password === credentials?.password
        ) {
          return user
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }) => {
      const customUser = user as unknown as usuario

      if (user) {
        return {
          ...token,
          tokenJWT: customUser.tokenJWT,
          role: customUser.role,
        }
      }
      return token
    },
    session: async ({ session, token }) => {
      const custonSession = {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          image: token.picture,
          tokenJWT: token.tokenJWT,
          role: token.role,
        },
      }
      return custonSession
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 1, // 1 hora
  },
}
