import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'

import { CartProvider } from '@/context/CartContext'
import { Header } from '@/components'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}

export default App
