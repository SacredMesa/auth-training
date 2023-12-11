import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if(!credentials) return null

        console.log('Do logic on these creds: ', credentials)

        const user = { id: '1', name: credentials.username, email: 'user@email.com' }

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
