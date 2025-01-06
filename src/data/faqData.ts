import type { FAQCategory } from '../types/faq';

export const faqCategories: FAQCategory[] = [
  {
    title: "Ordering & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping takes 3-5 business days within Europe. Express shipping (1-2 business days) and Next Day Delivery options are also available for an additional fee."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we currently ship to all EU countries. Delivery times may vary by location. International shipping outside the EU is not available at this time."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your delivery status through our website or the carrier's tracking system."
      }
    ]
  },
  {
    title: "Product Information",
    questions: [
      {
        question: "What condition are your refurbished phones in?",
        answer: "All our phones undergo a rigorous 30-point quality check and are graded based on their cosmetic condition (Fair, Good, or Excellent). Every device functions perfectly, regardless of its grade."
      },
      {
        question: "What's included with my refurbished phone?",
        answer: "Each phone comes with a certified charger, charging cable, SIM ejector tool, and our comprehensive 2-year warranty. All devices are factory reset and ready to use."
      },
      {
        question: "How do you test the phones?",
        answer: "Every phone undergoes extensive testing including battery health, screen quality, camera functionality, speaker performance, and all other features. Only phones that pass all tests are offered for sale."
      }
    ]
  },
  {
    title: "Warranty & Returns",
    questions: [
      {
        question: "What does your warranty cover?",
        answer: "Our 2-year warranty covers manufacturing defects and hardware malfunctions. This includes issues with the battery, screen, cameras, and other internal components. Accidental damage is not covered."
      },
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, you can return the device for a full refund. The phone must be in its original condition with all accessories included."
      },
      {
        question: "How do I make a warranty claim?",
        answer: "Contact our customer service team through the support portal or email. We'll guide you through the process and provide a prepaid shipping label if needed."
      }
    ]
  },
  {
    title: "Payment & Pricing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners."
      },
      {
        question: "Do you offer financing options?",
        answer: "Yes, we partner with several financing providers to offer flexible payment plans. Options include 0% interest for 12 months on qualifying purchases."
      },
      {
        question: "Why do prices vary for the same model?",
        answer: "Prices vary based on storage capacity, cosmetic condition, and current market value. Special editions or rare colors might also affect the price."
      }
    ]
  }
];