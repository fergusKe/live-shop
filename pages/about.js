import React from 'react'
import Link from 'next/link'
import Layout from '@components/Layout/Layout'

function About() {
  return (
    <Layout>
      <h1>About</h1>
      <Link href="/">
        <a>index</a>
      </Link>
    </Layout>
  )
}

export default About