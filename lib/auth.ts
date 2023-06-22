import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import axios from 'axios'

const URL = process.env.BACK_URL

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'passord',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email y contraseña requeridos')
        }

        const { data } = await axios.post(`${URL}/auth/login`, {
          email: credentials.email,
          password: credentials.password,
        })

        if (data.error) throw new Error('usuario o contraseña incorrectos')

        return data
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === 'google') {
        const response = await axios.get(`${URL}/auth/verify/${user.email}`)
        return { ...response.data }
      }
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        try {
          const exist = await axios.get(`${URL}/auth/verify/${user.email}`)

          if (!exist) {
            const userData = {
              username: user.name,
              email: user.email,
              password: user.id,
            }

            const response = await axios.post(`${URL}/users`, userData)

            if (response.data.errors || response.data.error) return false
          }
          return true
        } catch (error) {
          return false
        }
      }
      return true
    },
  },
  session: { strategy: 'jwt' },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
