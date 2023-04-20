export default function InputButton({text}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <button className="text-white bg-indigo-900 hover:from-indigo-900 hover:to-purple-900 border-0 py-2 px-6 focus:outline-none rounded text-lg">{text}</button>
        </div>
    );
}