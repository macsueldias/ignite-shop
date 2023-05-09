import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { Container, Header, Menu } from '@/styles/pages/app'

import logoImg from '../assets/logo.svg'
import { Handbag } from '@phosphor-icons/react'
import { SideBar } from './product/components'
import { useState } from 'react'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState(false)
  function handleToggleCart() {
    const sectionSideBar = document.getElementById('menu')
    if (show) {
      sectionSideBar?.classList.add('show')
      sectionSideBar?.classList.remove('hidden')
    } else {
      sectionSideBar?.classList.remove('show')
      sectionSideBar?.classList.add('hidden')
    }
    setShow(!show)
  }

  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
        <button onClick={handleToggleCart}>
          <span>3</span>
          <Handbag size={32} weight="bold" />
        </button>
      </Header>

      <Component {...pageProps} />

      <Menu id="menu" className="hidden">
        <SideBar fn={handleToggleCart} />
      </Menu>
    </Container>
  )
}

export default App
