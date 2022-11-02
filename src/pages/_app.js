import { Analytics } from '@vercel/analytics/react'
import SEOHead from 'src/components/SEOHead'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEOHead />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
