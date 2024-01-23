import styles from './Slides.module.css';
import slide1 from '/public/slide1.png';
import slide2 from '/public/slide2.png';
import slide3 from '/public/slide3.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const fotos = [slide1, slide2, slide3, slide1];

const Slides = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        effect="fade"
        className={styles.swiper}
      >
        {fotos.map((foto, index) => (
          <SwiperSlide key={index}>
            <div className={styles.container}>
              <img src={foto} alt="" className={styles.swiperSlide} />
              <h1 className={styles.titulo}>
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <h2 className={styles.subtitulo}>
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slides;

{
  /* <div className="container">
  <img
    src="https://i.imgur.com/4Z9xLJk.jpg"
    alt="Imagem de um experimento de fusão nuclear"
    className="image"
  />
  <div className="text">Notícia: Fusão nuclear supera temperatura do sol</div>
</div>; */
}
