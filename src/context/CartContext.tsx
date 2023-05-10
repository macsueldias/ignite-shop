import React, { createContext, useContext, useEffect, useState } from 'react'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface AmountCartProps {
  total: number
  amountProduct: number
}

interface ProductContextProps {
  cart: ProductProps[]
  totalCart: AmountCartProps
  addProductCart: (product: ProductProps) => void
  removeProductCart: (id: string) => void
}

interface CardProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as ProductContextProps)

export function CartProvider({ children }: CardProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>([])
  const [totalCart, setTotalCart] = useState<AmountCartProps>(
    {} as AmountCartProps,
  )

  const addProductCart = (product: ProductProps) => {
    console.log('ok')
    setCart((state: ProductProps[]) => [...state, product])
  }

  const removeProductCart = (id: string) => {
    setCart(cart.filter((item) => item.id === id))
  }

  useEffect(() => {
    const amountProducts = cart.reduce((acc, currentValue) => 1 + acc, 0)

    const valueProducts = cart.reduce(
      (acc, currentValue) => Number(currentValue.price) * 1 + acc,
      0,
    )
    setTotalCart({ amountProduct: amountProducts, total: valueProducts })
  }, [cart])

  return (
    <CartContext.Provider
      value={{ cart, totalCart, addProductCart, removeProductCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
