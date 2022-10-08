import SEOHead from 'src/components/SEOHead'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEOHead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
