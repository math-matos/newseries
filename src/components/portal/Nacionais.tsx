import { api, Series } from '../../api';
import { useEffect, useState } from 'react';
import styles from './Nacionais.module.css';
import CardNoticia from '../CardNoticia';

const Nacionais = () => {
  const [series, setSeries] = useState<[Series]>();
  const [itensRenderizados, setItensRenderizados] = useState<number[]>([0, 3]);
  const classeBotaoMenos =
    series && itensRenderizados[0] === 0
      ? 'botaoMenosDesativado'
      : 'botaoMenos';
  const classeBotaoMais =
    series && itensRenderizados[1] >= series.length
      ? 'botaoMaisDesativado'
      : 'botaoMais';

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
      <h1 className={styles.titulos}>Séries Nacionais</h1>

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

      <div className={styles.botoesContainer}>
        <button
          className={`${styles[classeBotaoMenos]}`}
          onClick={() => mostrarSeries('menos')}
        >
          <img src="/public/arrowLeft.svg" alt="" />
        </button>
        <button
          className={`${styles[classeBotaoMais]}`}
          onClick={() => mostrarSeries('mais')}
        >
          <img src="/public/arrowRight.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Nacionais;
