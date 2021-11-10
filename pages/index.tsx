import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { first, second, third, fourth } from '../constants/pep';

const Home: NextPage = () => {
  
  const generatePep = () => {
    let pieces = [
      first[Math.floor(Math.random() * first.length)],
      second[Math.floor(Math.random() * second.length)],
      third[Math.floor(Math.random() * third.length)],
      fourth[Math.floor(Math.random() * fourth.length)],
    ];

    return pieces.join(' ');
  }

  const [phrase, setPhrase] = useState(generatePep());

  const setPep = () => {
    setPhrase(generatePep());
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
          <button className={styles.generate} onClick={setPep}>
            Generate Pep Talk
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
