export default function MainButton({text}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <button className="text-white bg-gradient-to-r from-purple-900 to-indigo-900 hover:from-indigo-900 hover:to-purple-900 border-0 py-2 px-6 focus:outline-none rounded text-lg">{text}</button>
        </div>
    );
}