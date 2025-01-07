import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TopBanner } from './components/layout/TopBanner'
import { Header } from './components/layout/Header'
import { CartOverlay } from './components/cart/CartOverlay'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { ProductPage } from './pages/ProductPage'
import { SellToUs } from './pages/SellToUs'
import { AboutUs } from './pages/AboutUs'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { FAQ } from './pages/help/FAQ'
import { Contact } from './pages/help/Contact'
import { Shipping } from './pages/help/Shipping'
import { Returns } from './pages/help/Returns'
import { PrivacyPolicy } from './pages/help/PrivacyPolicy'
import { WarrantyPolicy } from './pages/help/WarrantyPolicy'
import { ScrollToTop } from './components/ScrollToTop'
import { Toast } from './components/Toast'
import { useCartOverlay } from './hooks/useCartOverlay'
import Footer from './components/Footer'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CheckoutSuccess } from './pages/checkout/CheckoutSuccess'
import { CheckoutCancel } from './pages/checkout/CheckoutCancel'
import { CheckoutPage } from './pages/CheckoutPage'


// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || '');
const stripePromise = loadStripe("pk_test_51Nwt8KJkLvblZeilhJ7hvuuhfJVwDRLjQERAVcvBbBXQd1KgMFiNJgf5OyuhrbyGk8ckA8umN4VG8RUHV9yICGQ000A3ygESkv" || '')



export default function App() {
  const { isOpen, close } = useCartOverlay()

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <TopBanner />
        <Header />
        <CartOverlay isOpen={isOpen} onClose={close} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route
              path="/checkout"
              element={
                <Elements stripe={stripePromise}>
                  <CheckoutPage />
                </Elements>
              }
            />
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="/checkout/fail" element={<CheckoutCancel />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/sell" element={<SellToUs />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/help/faq" element={<FAQ />} />
            <Route path="/help/contact" element={<Contact />} />
            <Route path="/help/shipping" element={<Shipping />} />
            <Route path="/help/returns" element={<Returns />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <Toast />
      </div>
    </Router>
  )
}
