import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { first, second, third, fourth } from '../constants/pep';

const Home: NextPage = () => {
  const historyMaxSize = 100;

  const generatePep = (): string => {
    let pieces = [
      first[Math.floor(Math.random() * first.length)],
      second[Math.floor(Math.random() * second.length)],
      third[Math.floor(Math.random() * third.length)],
      fourth[Math.floor(Math.random() * fourth.length)],
    ];
    
    return pieces.join(' ');
  }

  const getPepHistory = (): string[] => {
    const peps: string | null = localStorage.getItem('pepHistory');
    return peps ? JSON.parse(peps) : [];
  }

  const [index, setIndex] = useState(getPepHistory().length);
  const [phrase, setPhrase] = useState(generatePep());

  useEffect(() => {
    let pepHistory = getPepHistory();
    if (index >= pepHistory.length) {
      addPepToHistory(phrase, pepHistory);
    }
  }, [phrase]);

  const addPepToHistory = (pep: string, history: string[]): void => {
    if (history.length >= historyMaxSize) {
      history = history.slice(1);
      setIndex(index - 1);
    }
    localStorage.setItem('pepHistory', JSON.stringify([...history, pep]));
  }

  const viewHistory = (direction: string = 'back'): void => {
    const pepIndex = direction === 'forward' ? index + 1 : index - 1;
    const peps = getPepHistory();
    setPhrase(peps[pepIndex]);
    setIndex(pepIndex);
  }
  
  const setPep = (): void => {
    setPhrase(generatePep());
    setIndex(getPepHistory().length);
  };

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
          <button disabled={index >= getPepHistory().length - 1} className={styles.generate} onClick={() => viewHistory('forward')}>
            &#8594;
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
