import NextHead from 'next/head'

function SEOHead() {
  return (
    <NextHead>
      <title>Russ Tran | Front end Engineer</title>
      <meta
        name="description"
        content="I'm Russ Tran, a front end engineer/freelancer who love to create beautiful, fast and secure web applications tailored exclusively for your business goals"
      />
      <meta name="title" content="Russ Tran | Front end Engineer" />
      <meta
        name="keywords"
        content="russ tran, tung manh tran, website, web app, web application, mobile app, websites, technology, developer, freelancer, russdev, front end"
      />
      <meta name="author" content="Russ Tran" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.russdev.net/" />
      <meta property="og:title" content="Russ Tran | Front end Engineer" />
      <meta property="og:image" content="https://www.russdev.net/api/og" />
      <meta
        property="og:description"
        content="I'm Russ Tran, a front end engineer/freelancer who love to create beautiful, fast and secure web applications tailored exclusively for your business goals"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.russdev.net/" />
      <meta property="twitter:title" content="Russ Tran | Front end Engineer" />
      <meta
        property="twitter:description"
        content="I'm Russ Tran, a front end engineer/freelancer who love to create beautiful, fast and secure web applications tailored exclusively for your business goals"
      />
      <meta property="twitter:image" content="https://www.russdev.net/api/og" />
      <meta
        name="google-site-verification"
        content="veIpX8GsP0VAcw4Vj30dKcbXerORD0WitXFjGt_Swqk"
      />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={`https://www.russdev.net`} />
      <meta
        name="cozycot-one-time-domain-verification-id"
        content="2e351c5a-0c5c-4c0c-895c-3d074e4fb830"
      />
    </NextHead>
  )
}

export default SEOHead
