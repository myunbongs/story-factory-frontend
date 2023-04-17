
export default function Prompt() {
    return(
        <>
            <div className="relative mb-4 mt-10 ">
                <div className="mb-4">
                    <label for="message" className="text-2xl text-gray-100">동화책 내용을 입력해주세요! 🙇‍♀️</label>
                </div>
                <textarea id="message" name="message" placeholder="
                옛날 시골마을에 별난 재주 세 형제가 살았습니다. 눈이 밝은 맏이는 별별 것을 다 봅니다. 둘째는 천하장사 바윗돌도 번쩍번쩍. 개구쟁이 막내는 희한한 재주인데 매 맞는 재주입니다. 회초리로 때리면 간지럽다고 깔깔대고 절굿공이 내리치면 시원하다 깔깔댑니다. 그러던 어느 날 마을에 흉년이 들어 세 형제는 쫄쫄 굶고 나무뿌리 캐 먹으러 산 위로 올라갔습니다. “사람들 어찌 사나 어디 한 번 둘러볼까?” 눈 밝은 맏이가 어허 쯧쯧 혀를 찹니다. 논바닥이 쩌억 갈라지고 나무껍질이 홀라당 벗겨져 있었어요. 어른들은 굶어서 눈이 움푹 들어가고 아이들은 배고파 울고불고 소리칩니다. “으앙 배고파~” 그중에서 어디서 밥을 짓나 하얀 연기가 모락모락 피어 오르고 있었어요. “마을 사또 사는 곳에 잔치가 열렸구나” 곡간에는 쌀가마니가 산처럼 쌓여 있고 대청마루 상 위에는 온갖 음식이 가득히 차려져 있었어요. 땀 흘려 거둔 곡식을 사또 혼자 차지한 것입니다. 세 형제는 그 모습을 보고 화가 나서 이리해 볼까, 저리해 볼까 고민을 했습니다. 밤은 깊어 가는데 둘째가 쌀가마를 이고 갑니다. 이 집 저 집 다니며 배불리 먹으라고 세 형제는 밤새도록 홍길동 노릇을 합니다. “야단났네! 야단났어! 곡간이 텅 비었네!” 자신의 곡간이 도둑이 든 것을 안 사또는 소리칩니다. 대신 집집마다 밥을 짓는 연기로 하얀 연기가 나오고 있었습니다. 욕심 많은 사또는 화가 났습니다. 온 마을 사람들이 끌려와서 성난 사또 눈길을 피해 벌벌 떨고 있는데 막내가 쏜살같이 달려와 “내가 바로 도둑이오!”라고 말을 합니다. 결국 막내는 형틀에 묶여 맨 궁둥이 까발리고 철썩 곤장을 맞습니다. 사람들은 무서워 벌벌 떠는데 “아 시원하다!”라고 막내는 좋아합니다. 한 사람씩 돌아가며 곤장 백 대 내리쳐도 졸린 듯 따분한 듯 막내는 하품을 합니다. 오히려 때리는 놈들이 힘들어합니다. 보다 못한 사또가 곤장을 칩니다. 약이 오른 사또는 날뛰다 뒤로 넘어져 버립니다. 결국 지친 사또는 세 형제를 집으로 돌려보내고, 사이 좋은 세 형제는 집으로 돌아갑니다. 신기한 재주를 가진 삼 형제는 자신들의 재주로 굶어가는 마을 사람들을 돕습니다. 자신의 장점과 재주가 무엇인지 알고 이를 좋은 곳에 쓴 삼 형제는 우리가 본받아야 할 부분입니다. 사또는 자신의 이익만 취하려고 하다가 결국 가지고 있던 것도 모두 잃은 케이스로 과도한 욕심은 오히려 독이 되는 경우가 있습니다. 그러므로 우리는 과도한 욕심을 부리지 않는 것은 물론 내가 갖고 있는 장점으로 남을 도울 수 있는 지혜를 기를 수 있는 노력이 필요합니다.
                " className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div className="flex flex-col items-center justify-center">
            <button className="text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">콘티 생성하기</button>
            </div>
            <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700 mt-16"/>
            <p className="flex flex-col items-center justify-center text-lg text-gray-500">Copyright ⓒ StoryFactory</p>
        </>
    )
}