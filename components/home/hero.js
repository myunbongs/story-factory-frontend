import ChildAnimation from "../child-animation";
import TypingAnimation from "../typing-animation";

import { Noto_Sans_KR } from 'next/font/google'

const noto_Sans_KR_title = Noto_Sans_KR({ weight: "900", subsets: ['latin'] })

export default function Hero() {
    return (
        <>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-col px-5 py-5 justify-center">
                <h1 className={`${noto_Sans_KR_title.className} ${'sm:text-7xl text-white mb-4'}`}>Story <br/> Factory 
                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                    .AI
                </span>
                </h1>

                <div className='mb-9 leading-relaxed text-white text-3xl'>
                <TypingAnimation />
                </div>

                {/* <ChildAnimation /> */}

            </div>
            </section>
        </>
    )
}