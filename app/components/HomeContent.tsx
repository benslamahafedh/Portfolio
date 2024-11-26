'use client'

import { useHasMounted } from "../Hooks/useHasMounted"
import dynamic from 'next/dynamic'

// Import components with loading fallbacks
const Header = dynamic(() => import('./Header'), {
  loading: () => <div className="h-16 bg-white dark:bg-gray-900" />
})

const Hero = dynamic(() => import('./Hero'), {
  loading: () => <div className="min-h-screen" />
})

const About = dynamic(() => import('./About'), {
  loading: () => <div className="py-20" />
})

const Services = dynamic(() => import('./Services'), {
  loading: () => <div className="py-20" />
})

const Portfolio = dynamic(() => import('./Portfolio'), {
  loading: () => <div className="py-20" />
})

const Blogs = dynamic(() => import('./Blogs'), {
  loading: () => <div className="py-20" />
})

const Testimonials = dynamic(() => import('./Testimonials'), {
  loading: () => <div className="py-20" />
})
const CVDownload = dynamic(()=>import ("./CVDownload"),{
    loading:()=><div className="py-20" />
})

const Contact = dynamic(() => import('./Contact'), {
  loading: () => <div className="py-20" />
})

const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div className="py-10 bg-gray-100 dark:bg-gray-800" />
})

export default function HomeContent() {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blogs />
      <Testimonials />
      <CVDownload/>
      <Contact />
      <Footer />
    </>
  )
}

