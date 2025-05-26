import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Galeria Portafolio Mika',
  description: 'Galeria Portafolio Mika',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
