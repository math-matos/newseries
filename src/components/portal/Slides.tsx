import { useEffect, useState } from 'react';
import { api, Series } from '../../api';
import styles from './Slides.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Slides = () => {
  const [series, setSeries] = useState<[Series]>();
  const seriesPainel = series && series.slice(0, 4);
  function fetchSeries() {
    api
      .get('https://api.themoviedb.org/3/tv/popular')
      .then((response) => {
        if (response.status == 200) {
          setSeries(response.data.results);
        }
      })
      .catch((error) => {
        console.log('LoadTvs error ' + error);
      });
  }

  useEffect(() => fetchSeries(), []);
  const image_path = 'https://image.tmdb.org/t/p/w500/';

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
        {seriesPainel &&
          seriesPainel.map((serie, index) => (
            <SwiperSlide key={index}>
              <div className={styles.container}>
                <img
                  src={`${image_path}${serie.poster_path}`}
                  alt={`Poster da série ${serie.name}`}
                  className={styles.swiperSlide}
                />
                <h1 className={styles.titulo}>{serie.name}</h1>
                <h2 className={styles.subtitulo}>{serie.overview}</h2>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slides;
