import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Prompt from "@/components/input/prompt";
import SelectNumOfSentences from "@/components/input/select-num-of-sentences";
import Title from "@/components/input/title";
import axios from 'axios';
import { useState } from "react";
import BookAnimation from "@/components/book-animation";
import Slider from "@/components/home/slider";
import Result from "@/components/input/result";
import Description from "@/components/input/description";
import MainButton from "@/components/button/main-button";
import Link from "next/link";

export default function StoryFactory() {
    const [prediction, setPrediction] = useState(null)
    const [running, setRunning] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    // const [running, setRunning] = useState(false)
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            "contents": event.target.contents.value,
            "num_content": event.target.num_of_sentences.value,
            "num_reference": 1,
            "style": "sketch style",
            "model_gpt": "gpt-3.5-turbo",
            "model_diff": "runwayml/stable-diffusion-v1-5",
            "height": 416,
            "width": 608,
            "num_inference_steps": 30,
            "conti": {}
        }; 

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        try {
            setRunning(true)
            setErrorMsg('')

            await axios.post(
                '/txt2img',
                JSONdata,
                {
                    timeout: Infinity, 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    connection: 'keep-alive', 
                    contentLength: Infinity, 
                    maxBodyLength: Infinity, 
                    maxContentLength: Infinity, 
                }
            ).then((res) => {
                console.log(res.data);   
                setPrediction(res.data);
            }); 
        } catch (error) {
            console.error(error);
            setErrorMsg('잠시 후 다시 시도해주세요 😭')
        // } finally {
        //     setRunning(false)
        // }
        }
        finally {
            setRunning(false)
        }
    }
    
    return ( 
        <>
        <Layout>
            <Title />


            {errorMsg && (
                    <>
                    <h1 className="text-2xl text-white mt-14">❌ 에러발생</h1>
                    <div className="w-full flex justify-center text-white"><p>{errorMsg}</p></div>
                    </>
            )}

            <form onSubmit={handleSubmit}>
                <Prompt />            
                <SelectNumOfSentences/>
                
                <div className="flex flex-col items-center justify-center">
                    <button type="submit" className="text-white bg-indigo-900 hover:bg-purple-900 border-0 py-2 px-6 focus:outline-none rounded text-lg">동화 생성하기</button>
                </div>
            </form>

            <Footer />
            
            { prediction != null && (
                <>
                <div className="absolute px-5 py-5 top-0 left-0 right-0 flex-col justify-center items-center bg-black">
                    <Result />
                    <Slider items={prediction.conti}/>
                    <Description />
                    <Link href="/">
                        <MainButton text={'다시하기'} color={'hover:from-indigo-900 hover:to-purple-900'}/>
                    </Link>
                    <Footer />
                </div>
                </>
            )}

            {running && (
                <div className="fixed top-0 left-0 right-0 w-full min-h-screen flex flex-col justify-center items-center bg-black opacity-70">
                <BookAnimation />
                <div className="text-white text-xs font-bold">평균 30-50초 걸려요...</div>
                </div>
            )}

        </Layout>
        </>
    )
}
