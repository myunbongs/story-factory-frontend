import Image from "next/image";

export default function Title() {
    return (
        <div className="p-6 bg-indigo-900 hover:bg-purple-900 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <p className="text-7xl">🤖</p>
            </div>
            <div>
                <div className="text-xl font-medium text-white">Story Factory AI</div>
                <p className="text-white">동화 생성을 위한 동화 내용과 요약 문장 개수를 입력해주세요!</p>
            </div>
        </div>
    );
}