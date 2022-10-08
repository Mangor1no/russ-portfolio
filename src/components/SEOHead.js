import NextHead from 'next/head'

function SEOHead() {
  return (
    <NextHead>
      <title>Russ Tran | Front end Engineer</title>
      <meta
        name="description"
        content="I create beautiful, fast and secure web applications tailored exclusively for your business goals"
      />
      <meta name="title" content="Russ Tran | Front end Engineer" />
      <meta
        name="keywords"
        content="russ, tung manh tran, website, web app, web applications, web application, mobile apps, web apps, websites, technology, developer, freelancer"
      />
      <meta name="author" content="Russ Tran" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.russdev.net/" />
      <meta property="og:title" content="Russ Tran | Front end Engineer" />
      <meta
        property="og:image"
        content="https://live.staticflickr.com/65535/52414087165_386d1c8a94_b.jpg"
      />
      <meta
        property="og:description"
        content="I create beautiful, fast and secure web applications tailored exclusively for your business goals"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.russdev.net/" />
      <meta property="twitter:title" content="Russ Tran | Front end Engineer" />
      <meta
        property="twitter:description"
        content="I create beautiful, fast and secure web applications tailored exclusively for your business goals"
      />
      <meta
        property="twitter:image"
        content="https://live.staticflickr.com/65535/52414087165_386d1c8a94_b.jpg"
      />
      <meta
        name="google-site-verification"
        content="veIpX8GsP0VAcw4Vj30dKcbXerORD0WitXFjGt_Swqk"
      />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={`https://www.russdev.net`} />
    </NextHead>
  )
}

export default SEOHead
