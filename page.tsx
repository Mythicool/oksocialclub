import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FoodVendors from '@/components/FoodVendors'
import Events from '@/components/Events'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FoodVendors />
      <Events />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
