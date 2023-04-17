import Gallery from '@/components/home/gallery'
import Hero from '@/components/home/hero'
import Prompt from '@/components/home/prompt'
import { Noto_Sans_KR } from 'next/font/google'

const noto_Sans_KR_body = Noto_Sans_KR({ weight: "100", subsets: ['latin'] })

export default function Home() {
  return ( 
    <main className={`${noto_Sans_KR_body.className} ${'flex min-h-screen flex-col items-center justify-between p-24'}`}>
      <section className="text-gray-600 body-font">
        <Hero/>
        <Gallery/>
        <Prompt/>
      </section>
    </main>
  )
}
