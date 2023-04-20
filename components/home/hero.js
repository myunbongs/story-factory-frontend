import { Noto_Sans_KR } from 'next/font/google'

const noto_Sans_KR_title = Noto_Sans_KR({ weight: "900", subsets: ['latin'] })

export default function Hero() {
    return (
        <>
        <h1 className={`${noto_Sans_KR_title.className} ${'text-6xl text-white mb-4'}`}>Story <br/> Factory 
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            .AI
        </span>
        </h1>

        <div className='mb-9 leading-relaxed text-white text-3xl'>
        <p>당신의 글로, 세상에 단 하나뿐인 동화를 만들어보세요!</p>
        </div>
        </>
    )
}