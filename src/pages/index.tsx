import { Bag, HomeContainer, InfoProduct, Product } from '@/styles/pages/home'
import Head from 'next/head'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Link from 'next/link'
import { Handbag } from '@phosphor-icons/react'
import { useCart } from '@/context/CartContext'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  amount: number
  price: string
  defaultPriceId: string
}

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  const { addProductCart } = useCart()

  async function handleAddProductCart(product: ProductProps) {
    try {
      addProductCart(product)
    } catch (error) {}
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <InfoProduct>
                  <Link href={`/product/${product.id}`} prefetch={false}>
                    <p>{product.name}</p>
                    <span>{product.price}</span>
                  </Link>
                </InfoProduct>
                <Bag onClick={() => handleAddProductCart(product)}>
                  <Handbag size={32} weight="bold" />
                </Bag>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
