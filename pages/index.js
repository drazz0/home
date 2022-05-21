import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the home of Unbl0cked stuff!" />
        <p className="description">
          Hope you have fun and join the d!scord</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
