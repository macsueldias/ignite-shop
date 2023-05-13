import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '@/lib/stripe'

type Product = {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface Cart {
  cart: Product[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { cart }: Cart = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!cart) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const products = cart.map((product) => {
    return { price: product.defaultPriceId, quantity: 1 }
  })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: products,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
