import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.boardStyle}>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
        <div className={styles.cell}>
          <div className={styles.stone} />
        </div>
      </div>
    </div>
  );
};

export default Home;
