import { useRef } from 'react'
import Footer from 'src/components/footer'
import About from 'src/components/home/About'
import Contact from 'src/components/home/Contact'
import Hero from 'src/components/home/Hero'
import Works from 'src/components/home/Works'
import Layout from 'src/components/layout'

export default function Home() {
  const ref = useRef(null)

  const handleScrollDown = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout>
      <Hero handleScrollDown={handleScrollDown} />
      <About ref={ref} />
      <Works />
      <Contact />
      <Footer />
    </Layout>
  )
}
