import Image from 'next/image'
import { ContainerSidebar, ProductCart } from './styles'

import camisa from '../../../assets/1.png'
import { X } from '@phosphor-icons/react'

interface SideBarProps {
  fn: () => void
}

export const SideBar = ({ fn }: SideBarProps) => {
  return (
    <ContainerSidebar>
      <button onClick={fn}>
        <X size={32} weight="bold" />
      </button>
      <h3>Sacola de compras</h3>
      <ProductCart>
        <div>
          <Image src={camisa} alt="" width={94} />
        </div>
        <div>
          <h4>Camiseta Beyond the Limits</h4>
          <span>R$ 79,90</span>
          <button>Remover</button>
        </div>
      </ProductCart>
    </ContainerSidebar>
  )
}
