import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import { CartProvider } from 'use-shopping-cart'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY}
      currency="JPY"
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000"
    >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Hello EC
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Component {...pageProps} />
      </CartProvider>
  )
}

export default MyApp