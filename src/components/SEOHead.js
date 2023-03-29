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
      <meta
        name="cozycot-one-time-domain-verification-id"
        content="4896b8bc-174a-4989-8b0c-e8b0a9e9d26e"
      />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={`https://www.russdev.net`} />
    </NextHead>
  )
}

export default SEOHead
