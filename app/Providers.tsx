'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children, ...props }: any) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}

