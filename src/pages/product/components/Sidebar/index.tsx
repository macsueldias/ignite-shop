import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
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
import { formatCurrency } from '@/utils/formatCurrency'

interface SideBarProps {
  fn: () => void
}

export const SideBar = ({ fn }: SideBarProps) => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { cart, totalCart, removeProductCart } = useCart()

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
          const totalProductWithAmout =
            (product.amount * Number(product.price.replace(/[^0-9]/g, ''))) /
            100
          return (
            <ProductCart key={uuidv4()}>
              <div>
                <Image src={product.imageUrl} alt="" width={94} height={98} />
              </div>
              <div>
                <h4>
                  {product.amount}x {product.name}
                </h4>
                <span>{formatCurrency(totalProductWithAmout)}</span>
                <button onClick={() => removeProductCart(product.id)}>
                  Remover
                </button>
              </div>
            </ProductCart>
          )
        })}
      </ProductsCart>
      <InfoCart>
        <AmountCart>
          <p>Quantidade</p>
          <span>{totalCart.amountProduct} itens</span>
        </AmountCart>
        <TotalCart>
          <p>Valor total</p>
          <span>{formatCurrency(totalCart.total)}</span>
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
