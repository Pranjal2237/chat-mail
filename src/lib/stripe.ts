'server-only'
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
})

//prod_Rxfdso00CVXU5T

//price_1R3kIMDyggIbk4ZaAU5buVSk