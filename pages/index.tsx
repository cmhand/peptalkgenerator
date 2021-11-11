import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PepService } from '../services/pep';

const Home: NextPage = () => {
  
  const [phrase, setPhrase] = useState(PepService.generatePep());

  const setPep = () => {
    setPhrase(PepService.generatePep());
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
