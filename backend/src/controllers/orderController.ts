import { Request, Response, NextFunction } from 'express';
import Stripe from 'stripe';
import { FRONTEND_URL, STRIPE_API_KEY } from '../Utils/env';
import catchAsync from '../Utils/catchAsync';

const STRIPE = new Stripe(STRIPE_API_KEY as string)
const FRONTE_URL = FRONTEND_URL as string;

type CheckoutSessionRequest = {
  orderItems: {
    product: string;
    quantity: number;
    price: number;
  }[];
  deliveryDetails: {
    firstName: string;
    lastName: string;
    companyName?: string;
    country?: string;
    streetAddress: string;
    city: string;
    province: string;
    phone: string;
    emailAddress: string;
    additionalInfo?: string;
    zipCode: string;
  },
  userId: string;
}

export const createCheckoutSession = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const checkoutSessionRequest = req.body as CheckoutSessionRequest;

  const session = await STRIPE.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: checkoutSessionRequest.orderItems.map((item) => ({
      price_data: {
        currency: 'vnd',
        product_data: {
          name: item.product,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    customer_email: checkoutSessionRequest.deliveryDetails.emailAddress,
    mode: 'payment',
    success_url: `${FRONTE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${FRONTE_URL}/checkout`,
    metadata: {
      phone: checkoutSessionRequest.deliveryDetails.phone,
      name: `${checkoutSessionRequest.deliveryDetails.firstName} ${checkoutSessionRequest.deliveryDetails.lastName}`,
    },
    shipping_address_collection: {
      allowed_countries: ['VN'],
    }
  });

  res.status(200).json({
    status: 'success',
    data: {
      url: session.url,
    },
  });
})

export const getOrderById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await Promise.all([
    STRIPE.checkout.sessions.retrieve(req.params.id, {
      expand: ['payment_intent.payment_method'],
    }),
    STRIPE.checkout.sessions.listLineItems(req.params.id),
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      session: result[0],
      lineItems: result[1],
    },
  });
})

export const createOrder = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const order = req.body;

  res.status(201).json({
    status: 'success',
    data: {
      order,
    },
  });
})