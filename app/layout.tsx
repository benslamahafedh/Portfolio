import { Providers } from './Providers'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  )
}

