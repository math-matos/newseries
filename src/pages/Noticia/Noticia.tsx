import { useParams } from "react-router-dom";
import "./Noticia.css";
import useFetch from "../../hooks/useFetch";

export const Noticia = () => {
  const { id } = useParams();
  const { series } = useFetch();

  const serieSelecionada = series && series.find((serie) => serie.id === id);
  console.log(serieSelecionada);

  return (
    <div className="noticia">
      <div className="mid-text">
        <img
          className="principal-image"
          alt="imagem principal"
          src={`https://image.tmdb.org/t/p/w500/zZDkgOmFMVYpGAkR9Tkxw0CRnxX.jpg`}
          // configurar com a API {`https://image.tmdb.org/t/p/w500/${serieSelecionada!.backdrop_path}`}
        />
        <div className="container">
          <p className="text-wrapper">
            Série de artes marciais continua rivalidade de Karate Kida  {/* // configurar com a API {serieSelecionada?.name} */}
          </p>
          <p className="por-fulano-silva">
            <span className="span-1">
              Por Fulano Silva - 01/01/1990 - 12h00 em{" "}
            </span>
            <strong>Séries Nacionais</strong>
          </p>
          <p className="dorem-ipsum-dolor">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            incidunt repellendus consectetur harum eum maxime consequatur
            delectus iste earum? Dolore.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ipsa
            labore itaque provident eligendi. Pariatur est mollitia maxime
            delectus non? {/* // configurar com a API {serieSelecionada?.overview} */}
          </p>
        </div>
      </div>

      <div className="overlap-wrapper">
        <div className="see-more">
          <div className="see-more-line">
            <div className="text-wrapper-7">Veja mais</div>
            <img className="line" alt="linha preta" src="./public/line7.png" />
          </div>

          <div className="see-more-content">
            <div className="image-and-text">
              <img
                className="feed-img"
                alt="pessoa vendo filme"
                src="./public/slide1.png"
              />
              <p className="see-more-text">
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="image-and-text">
              <img
                className="feed-img"
                alt="pessoa vendo filme"
                src="./public/slide1.png"
              />
              <p className="see-more-text">
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="image-and-text">
              <img
                className="feed-img"
                alt="pessoa vendo filme"
                src="./public/slide1.png"
              />
              <p className="see-more-text">
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="image-and-text">
              <img
                className="feed-img"
                alt="pessoa vendo filme"
                src="./public/slide1.png"
              />
              <p className="see-more-text">
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
