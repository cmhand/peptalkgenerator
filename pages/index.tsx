import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PepService } from '../services/pep';
import { historyMaxSize } from '../constants/pep';

const Home: NextPage = () => {

  const [index, setIndex] = useState(PepService.getPepHistory().length);
  const [phrase, setPhrase] = useState(PepService.generatePep());

  useEffect(() => {
    let history = PepService.getPepHistory();
    if (index >= history.length) {
      if (history.length >= historyMaxSize) {
        history = history.slice(1);
        setIndex(index - 1);
      }
      PepService.addPepToHistory(phrase, history);
    }
  }, [phrase]);

  const setPep = (): void => {
    setPhrase(PepService.generatePep());
    setIndex(PepService.getPepHistory().length);
  };

  const viewHistory = (direction: string = 'back'): void => {
    const pepIndex = direction === 'forward' ? index + 1 : index - 1;
    const peps = PepService.getPepHistory();
    setPhrase(peps[pepIndex]);
    setIndex(pepIndex);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>PepTalkGenerator</title>
        <meta name="description" content="Give someone a pep talk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {phrase}
        </h1>
        <div className={styles.centered}>
          <button disabled={index === 0} className={styles.generate} onClick={() => viewHistory('back')}>
            &#8592;
          </button>
          <button className={styles.generate} onClick={setPep}>
            Generate Pep Talk
          </button>
          <button disabled={index >= PepService.getPepHistory().length - 1} className={styles.generate} onClick={() => viewHistory('forward')}>
            &#8594;
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
