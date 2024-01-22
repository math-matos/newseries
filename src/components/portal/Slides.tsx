import styles from './Slides.module.css';
import slide1 from '/public/slide1.png';
import slide2 from '/public/slide2.png';
import slide3 from '/public/slide3.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const fotos = [slide1, slide2, slide3, slide1];

const Slides = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {fotos.map((foto, index) => (
          <SwiperSlide key={index}>
            <img src={foto} alt="" className={styles.swiperSlide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slides;
