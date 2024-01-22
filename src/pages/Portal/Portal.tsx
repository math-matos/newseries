import styles from './Portal.module.css';
import Slides from '../../components/portal/Slides';
import Nacionais from '../../components/portal/Nacionais';
import Internacionais from '../../components/portal/Internacionais';

const Portal = () => {
  return (
    <div className={styles.body}>
      <Slides />
      <Nacionais />
      <Internacionais />
    </div>
  );
};

export default Portal;
