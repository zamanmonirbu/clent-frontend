import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'eur', payment_method_types } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Amount in cents
      currency,
      payment_method_types,
      metadata: {
        integration_check: 'accept_a_payment',
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});