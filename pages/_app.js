import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Techsembly</title>
        <meta name="viewport" lang="en" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
