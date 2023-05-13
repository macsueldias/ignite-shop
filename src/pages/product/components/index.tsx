import Image from 'next/image'
import {
  AmountCart,
  ConfirmProductCart,
  ContainerSidebar,
  InfoCart,
  ProductCart,
  ProductsCart,
  TotalCart,
} from './styles'

import { X } from '@phosphor-icons/react'
import { useCart } from '@/context/CartContext'
import axios from 'axios'
import { useState } from 'react'

interface SideBarProps {
  fn: () => void
}

export const SideBar = ({ fn }: SideBarProps) => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { cart } = useCart()

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        cart,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }
  return (
    <ContainerSidebar>
      <button onClick={fn}>
        <X size={32} weight="bold" />
      </button>
      <h3>Sacola de compras</h3>
      <ProductsCart>
        {cart.map((product) => {
          return (
            <ProductCart key={new Date().getTime()}>
              <div>
                <Image src={product.imageUrl} alt="" width={94} height={98} />
              </div>
              <div>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
                <button>Remover</button>
              </div>
            </ProductCart>
          )
        })}
      </ProductsCart>
      <InfoCart>
        <AmountCart>
          <p>Quantidade</p>
          <span>{cart.length} itens</span>
        </AmountCart>
        <TotalCart>
          <p>Valor total</p>
          <span>R$ 270,00</span>
        </TotalCart>
        <ConfirmProductCart
          disabled={isCreatingCheckoutSession}
          onClick={handleBuyProduct}
        >
          Finalizar Comprar
        </ConfirmProductCart>
      </InfoCart>
    </ContainerSidebar>
  )
}
