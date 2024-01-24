import { useState } from "react";
import styles from "./FeedSeries.module.css";
import CardNoticia from "../CardNoticia";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

type Props = {
  title: string;
};

const FeedSeries = ({ title }: Props) => {
  const { series } = useFetch();

  const [itensRenderizados, setItensRenderizados] = useState<number[]>([0, 3]);

  const classeBotaoMenos =
    series && itensRenderizados[0] === 0
      ? "botaoMenosDesativado"
      : "botaoMenos";
  const classeBotaoMais =
    series && itensRenderizados[1] >= series.length
      ? "botaoMaisDesativado"
      : "botaoMais";

  const seriesRenderizadas =
    series && series.slice(itensRenderizados[0], itensRenderizados[1]);

  const mostrarSeries = (valor: string) => {
    if (itensRenderizados[1] < series!.length) {
      if (valor === "mais") {
        const novosItens = itensRenderizados.map((item) => item + 3);
        setItensRenderizados(novosItens);
      }
    }

    if (valor === "menos") {
      if (itensRenderizados[0] > 3) {
        const novosItens = itensRenderizados.map((item) => item - 3);
        setItensRenderizados(novosItens);
      } else {
        setItensRenderizados([0, 3]);
      }
    }
  };

  const image_path = "https://image.tmdb.org/t/p/w500/";

  return (
    <div>
      <h1 className={styles.titulos}>Series {title}</h1>

      <ul className={styles.seriesContainer}>
        {seriesRenderizadas &&
          seriesRenderizadas.map((serie, index) => (
            <li key={index}>
              <Link to={`/serie/${serie.id}/`}>
                <CardNoticia
                  url={`${image_path}${serie.poster_path}`}
                  titulo={serie.name}
                  subtitulo={serie.overview}
                />
              </Link>
            </li>
          ))}
      </ul>

      <div className={styles.botoesContainer}>
        <button
          className={`${styles[classeBotaoMenos]}`}
          onClick={() => mostrarSeries("menos")}
        >
          <img src="/public/arrowLeft.svg" alt="" />
        </button>
        <button
          className={`${styles[classeBotaoMais]}`}
          onClick={() => mostrarSeries("mais")}
        >
          <img src="/public/arrowRight.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default FeedSeries;
