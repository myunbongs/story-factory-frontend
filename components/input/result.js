import Image from "next/image";

export default function Result() {
    return (
        <div className="p-6 mt-10 bg-green-900 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <p className="text-7xl">🎉</p>
            </div>
            <div>
                <div className="text-xl font-medium text-white">Story Factory AI</div>
                <p className="text-white">동화 생성이 완료 되었어요!</p>
            </div>
        </div>
    );
}