import React from "react"
import Head from "next/head"

const Meta = ({
  title = "直撥購物",
  description = "Shop our collection of awesome T-shirts",
  keywords = "T-shirts, Design",
  ogtitle = "直撥購物",
  ogdescription = "Shop our collection of awesome T-shirts",
  ogtype = "website",
  ogimage = "",
  ogsitename = "liveShop",
  ogurl = "",
  canonical = ""
}) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={ogtitle} />
    <meta property="og:description" content={ogdescription} />
    <meta property="og:type" content={ogtype} />
    <meta property="og:image" content={ogimage} />
    <meta property="og:site_name" content={ogsitename} />
    <meta property="og:url" content={ogurl} />
    <link rel="canonical" href={canonical} />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta:300,400,700" /> 
    <link rel="stylesheet" href="fonts/icomoon/style.css" />

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/magnific-popup.css" />
    <link rel="stylesheet" href="css/jquery-ui.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="css/owl.theme.default.min.css" />

    <link rel="stylesheet" href="css/aos.css"></link>
  </Head>
)
export default Meta
