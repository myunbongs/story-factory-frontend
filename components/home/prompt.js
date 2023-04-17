
export default function Prompt() {
    return(
        <>
            <div className="relative mb-4 mt-10 ">
                <div className="mb-4">
                    <label for="message" className="text-2xl text-gray-100">동화책 내용을 입력해주세요! 🙇‍♀️</label>
                </div>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div className="flex flex-col items-center justify-center">
            <button className="text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">콘티 생성하기</button>
            </div>
            <p className="text-lg text-gray-500 mt-3">@저작권 표시 예정</p>
        </>
    )
}
