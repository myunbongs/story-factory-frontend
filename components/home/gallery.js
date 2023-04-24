import Image from "next/image"

export default function Gallery() {
    return (
        <div className="container px-5 py-5 mx-auto mb-10">
            <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={"/story-factory/1. fantasy_art/1-1.png"} width={608} height={416}/>
                <div className="px-8 py-10 relative z-10 w-full border bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">빨간 모자와 늑대</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">1.</h1>
                    <p className="leading-relaxed">소녀가 할머니에게 케이크와 와인을 가져갔다.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/story-factory/1. fantasy_art/2-1.png" width={608} height={416}/>
                <div className="px-8 py-10 relative z-10 w-full border bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">빨간 모자와 늑대</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">2. </h1>
                    <p className="text-gray-300 leading-relaxed">소녀는 늑대를 만났다.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/story-factory/1. fantasy_art/3-1.png" width={608} height={416}/>
                <div className="px-8 py-10 relative z-10 w-full border bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">빨간 모자와 늑대</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">3.</h1>
                    <p className="leading-relaxed">늑대가 할머니의 집을 찾으려 한다.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/story-factory/1. fantasy_art/4-1.png" width={608} height={416}/>
                <div className="px-8 py-10 relative z-10 w-full border bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">빨간 모자와 늑대</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">4.</h1>
                    <p className="leading-relaxed">늑대는 빨간모자를 잡아먹었다.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/story-factory/1. fantasy_art/5-1.png" width={608} height={416}/>
                <div className="px-8 py-10 relative z-10 w-full border bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">빨간 모자와 늑대</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">5.</h1>
                    <p className="leading-relaxed">사냥꾼이 늑대 배를 잘랐다.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={"/story-factory/1. fantasy_art/6-1.png"} width={608} height={416} />
                <div className="px-8 py-10 relative z-10 w-full border bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">빨간 모자와 늑대</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">6.</h1>
                    <p className="leading-relaxed">빨간모자와 할머니는 도망쳤다.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
}