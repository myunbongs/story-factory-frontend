import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import styles from "/styles/responsive.module.css";
import Image from "next/image";
import TypingAnimation from "../typing-animation";

export default function Slider({items}) {
    return (
        <div className="container mx-auto flex flex-col px-5 py-5 justify-center">
            <div className={styles.container}>
            <Carousel
                showArrows={true}
                autoPlay={true}
                showIndicators={true}
                infiniteLoop={true}
                dynamicHeight={false}
                className={styles.mySwiper}
            >
                {items && Object.entries(items).map(([key, value]) => ( 
                <div key={key} className={styles.swipItem}>
                    <div className={styles.detail}>
                        <div className='mb-9 leading-relaxed text-white text-xl'>
                            <TypingAnimation text={key} />
                        </div>
                    </div>
                    <div style={{width: '100%'}}>
                        <Image src={`data:image/png;base64,${value}`} width={608} height={416} alt="no image" />
                    </div>
                </div>
                ))}
            </Carousel>
            </div>
        </div>
    );
}
