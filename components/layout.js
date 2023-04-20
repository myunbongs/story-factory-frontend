import { Noto_Sans_KR } from 'next/font/google'

const noto_Sans_KR_body = Noto_Sans_KR({ weight: "100", subsets: ['latin'] })

export default function Layout({children}) {
    return(
        <main className={`${noto_Sans_KR_body.className} ${'flex-col items-center'}`}>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-5 justify-center">
                    {children}
                </div>
            </section>
        </main>
    )
}