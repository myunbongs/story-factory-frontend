import Image from "next/image"

export default function Gallery() {
    return (
        <div className="container px-5 py-5 mx-auto mb-10">
            <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" width={600} height={360}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361" width={601} height={361}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">The Catalyzer</h1>
                    <p className="text-gray-300 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363" width={603} height={363}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362" width={602} height={362}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365" width={605} height={365}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" width={606} height={366} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-70">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
}