import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: Request) {
  const body = await req.json()

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    currency: 'cop',
    amount: Number(body.amount.toString() + '00'),
    payment_method_types: ['card'],
  })

  return NextResponse.json({ clientSecret: paymentIntent.client_secret })
}
