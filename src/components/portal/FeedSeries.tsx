import { api, Series } from '../../api';
import { useEffect, useState } from 'react';
import styles from './FeedSeries.module.css';
import CardNoticia from '../CardNoticia';

type Props = {
  title: string;
};

const FeedSeries = ({ title }: Props) => {
  const [series, setSeries] = useState<[Series]>();
  const [itensRenderizados, setItensRenderizados] = useState<number[]>([0, 3]);

  const seriesRenderizadas =
    series && series.slice(itensRenderizados[0], itensRenderizados[1]);

  const mostrarSeries = (valor: string) => {
    if (itensRenderizados[1] < series!.length) {
      if (valor === 'mais') {
        const novosItens = itensRenderizados.map((item) => item + 3);
        setItensRenderizados(novosItens);
      }
    }

    if (valor === 'menos') {
      if (itensRenderizados[0] > 3) {
        const novosItens = itensRenderizados.map((item) => item - 3);
        setItensRenderizados(novosItens);
      } else {
        setItensRenderizados([0, 3]);
      }
    }
  };

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
    <div>
      <h1 className={styles.titulos}>Series {title}</h1>

      <div className={styles.seriesContainer}>
        {seriesRenderizadas &&
          seriesRenderizadas.map((serie, index) => (
            <CardNoticia
              url={`${image_path}${serie.poster_path}`}
              titulo={serie.name}
              subtitulo={serie.overview}
              key={index}
            />
          ))}
      </div>

      <button onClick={() => mostrarSeries('menos')}>
        <img src="/public/arrowLeft.svg" alt="" />
      </button>
      <button onClick={() => mostrarSeries('mais')}>
        <img src="/public/arrowRight.svg" alt="" />
      </button>
    </div>
  );
};

export default FeedSeries;
