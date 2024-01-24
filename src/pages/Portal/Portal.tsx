import styles from './Portal.module.css';
import Slides from '../../components/portal/Slides';
import FeedSeries from '../../components/portal/FeedSeries';

const Portal = () => {
  return (
    <main className={styles.body}>
      <Slides />
      <FeedSeries title="Nacionais" />
      <FeedSeries title="Internacionais" />
    </main>
  );
};

export default Portal;
