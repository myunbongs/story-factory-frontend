import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Prompt from "@/components/input/prompt";
import SelectNumOfSentences from "@/components/input/select-num-of-sentences";
import Title from "@/components/input/title";
import InputButton from '@/components/button/input-button'

export default function Input() {
    return ( 
        <Layout>
            <Title />
            <Prompt />
            <SelectNumOfSentences/>
            <InputButton text="동화 생성하기"/>
            <Footer />
        </Layout>
    )
}
  