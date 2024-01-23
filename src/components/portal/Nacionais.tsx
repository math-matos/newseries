import styles from "./Nacionais.module.css";
import CardNoticia from "../CardNoticia";
import slide1 from "/public/slide1.png";
import slide2 from "/public/slide2.png";
import slide3 from "/public/slide3.png";
const Nacionais = () => {
  const fotos = [slide1, slide2, slide3, slide2];

  return (
    <div>
      <h1 className={styles.titulos}>Séries Nacionais</h1>

      <div className={styles.seriesContainer}>
        {fotos.map((foto) => (
          <CardNoticia
            url={foto}
            titulo="Torem ipsum dolor sit amet, consectetur adipiscing elit."
            subtitulo="Torem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        ))}
      </div>
    </div>
  );
};

export default Nacionais;
