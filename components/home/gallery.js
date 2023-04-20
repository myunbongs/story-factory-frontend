import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { items } from "/public/Items.json";
import styles from "/styles/responsive.module.css";
import Image from "next/image";
import TypingAnimation from "../typing-animation";

export default function Gallery() {
  const { swiper } = items;
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
            {swiper.map((item) => ( 
            <div key={item.id} className={styles.swipItem}>
                <div className={styles.detail}>
                  <div className='mb-9 leading-relaxed text-white text-xl'>
                    <TypingAnimation text={item.text} />
                  </div>
                </div>
                <div className={styles.imgBox}>
                <Image src={item.imageUrl} width={608} height={416} alt="slides" />
                </div>
            </div>
            ))}
        </Carousel>
        </div>
    </div>
  );
}
