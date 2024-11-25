import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Blogs from './components/Blogs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CVDownload from './components/CVDownload'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:bg-dark">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blogs />
      <Testimonials />
      <CVDownload />
      <Contact />
      <Footer />
    </main>
  )
}

