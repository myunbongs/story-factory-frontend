export default function SelectNumOfSentences() {

    return(
        <div className="mb-10">
            <div className="text-gray-100">
                <p>2. 요약할 문장 개수를 입력해주세요 </p>
            </div>
            <label forHtml="underline_select" className="sr-only">Underline select</label>
            <select htmlFor="num_of_sentences" id="num_of_sentences" name="num_of_sentences" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
    )
}