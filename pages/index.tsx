import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PepService } from '../services/pep';
import { UtilsService } from '../services/utils';

const Home: NextPage = () => {
  
  const [phrase, setPhrase] = useState(PepService.generatePep());
  const [isCopied, setIsCopied] = useState(false);

  const setPep = () => {
    setPhrase(PepService.generatePep());
  };

  const copyPep = (): void => {
    UtilsService.copyTextToClipboard(phrase).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>PepTalkGenerator</title>
        <meta name="description" content="Give someone a pep talk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.pep} onClick={copyPep}>
          <em className={styles.copy}>{isCopied ? 'Copied to clipboard' : 'Click to copy'}</em>
          <h1 className={styles.title}>
            {phrase}
          </h1>
        </div>
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
