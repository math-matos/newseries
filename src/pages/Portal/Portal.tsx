import styles from "./Portal.module.css";
import Slides from "../../components/portal/Slides";
import Nacionais from "../../components/portal/FeedSeries";

const Portal = () => {
  return (
    <div className={styles.body}>
      <Slides />
      <Nacionais title="Nacionais"/>
      <Nacionais title="internacionais"/>
    </div>
  );
};

export default Portal;
