import { Handbag } from '@phosphor-icons/react'
import { HeaderContainer, Menu } from './styles'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import logoImg from '../../assets/logo.svg'
import { SideBar } from '@/pages/product/components/Sidebar'

export const Header = () => {
  const [show, setShow] = useState(true)
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

  const { totalCart } = useCart()
  return (
    <>
      <HeaderContainer>
        <img src={logoImg.src} alt="" />
        {totalCart.amountProduct > 0 && (
          <button onClick={handleToggleCart}>
            <span>{totalCart.amountProduct}</span>
            <Handbag size={32} weight="bold" />
          </button>
        )}
      </HeaderContainer>
      <Menu id="menu" className="hidden">
        <SideBar fn={handleToggleCart} />
      </Menu>
    </>
  )
}
