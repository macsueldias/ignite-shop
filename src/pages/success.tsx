import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

import {
  SuccessContainer,
  ImageContainer,
  ImageItem,
} from '@/styles/pages/success'
import { stripe } from '@/lib/stripe'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
    amount: number
  }[]
}

export default function Success({ customerName, product }: SuccessProps) {
  const amountProducts = product.reduce((acc, currentValue) => {
    return currentValue.amount + acc
  }, 0)
  const amountProductsOrNameProduct =
    amountProducts > 1
      ? ` suas ${amountProducts} Camisetas`
      : `Camiseta ${product[0].name}`

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          {product.map((item) => {
            return (
              <ImageItem key={item.name}>
                <Image src={item.imageUrl} width={120} height={110} alt="" />
              </ImageItem>
            )
          })}
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>,
          <strong>{amountProductsOrNameProduct}</strong> já está a caminho da
          sua casa.{' '}
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return {
      name: product.name,
      imageUrl: product.images[0],
      amount: item.quantity,
    }
  })

  return {
    props: {
      customerName,
      product: [...products],
    },
  }
}
