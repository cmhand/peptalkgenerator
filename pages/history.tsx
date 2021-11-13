import { NextPage } from 'next';
import styles from '../styles/Home.module.css'
import { PepService } from '../services/pep';
import Header from '../components/Header';

const History: NextPage = () => {
  const pageLinks = [ { title: 'Home', route: '/'} ];
  const peps = PepService.getPepHistory();
  const listItems = peps.map((pep, index) =>
    <li key={index.toString()}>{pep}</li>
  );

  return (
    <div className={styles.container}>
      <Header pageTitle={'Pep Talk History'} links={pageLinks} />
      <ul>{listItems}</ul>
    </div>
  );
}

export default History