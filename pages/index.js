import Gallery from '@/components/home/gallery'
import Hero from '@/components/home/hero'
import Footer from '@/components/footer'
import MainButton from '@/components/button/main-button'
import Layout from '@/components/layout'
import Link from 'next/link'

export default function Home() {
  return ( 
    <Layout>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-col px-5 py-5 justify-center">
              <Hero/>
              <Gallery/>
              <Link href="/input">
                <MainButton text={'시작하기'} color={'hover:from-indigo-900 hover:to-purple-900'}/>
              </Link>
              <Footer />
            </div>
          </section>
    </Layout>
  )
}
