import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import 'react-toastify/dist/ReactToastify.css'

import { CartProvider } from '@/context/CartContext'
import { Header } from '@/components/Header'

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
