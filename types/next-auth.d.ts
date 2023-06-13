import NextAuth, { DefaultSession } from 'next-auth'
import { JWT, DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      username: string
      role: string
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    username: string
    role: string
  }
}
