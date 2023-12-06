
import { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export async function generateMetadata(
  { params},
): Promise<Metadata> {
  return {
    title: 'nextjs-app',
  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
