import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Contact />
    </div>
  )
}
