import styles from './CardNoticia.module.css';

type Props = { url: string; titulo: string; subtitulo: string };
const CardNoticia = ({ url, titulo, subtitulo }: Props) => {
  return (
    <div className={styles.container}>
      <img src={url} alt="" className={styles.cardImg} />
      <div className={styles.textContainer}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.subtitulo}>{subtitulo}</p>
      </div>
    </div>
  );
};

export default CardNoticia;
