import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// Payment method types
export const PAYMENT_METHODS = {
  IDEAL: 'ideal',
  CARD: 'card'
} as const;

// iDEAL bank list
export const IDEAL_BANKS = [
  { id: 'abn_amro', name: 'ABN AMRO' },
  { id: 'asn_bank', name: 'ASN Bank' },
  { id: 'bunq', name: 'Bunq' },
  { id: 'handelsbanken', name: 'Handelsbanken' },
  { id: 'ing', name: 'ING' },
  { id: 'knab', name: 'Knab' },
  { id: 'rabobank', name: 'Rabobank' },
  { id: 'regiobank', name: 'RegioBank' },
  { id: 'revolut', name: 'Revolut' },
  { id: 'sns_bank', name: 'SNS Bank' },
  { id: 'triodos_bank', name: 'Triodos Bank' },
  { id: 'van_lanschot', name: 'Van Lanschot' }
];