import styles from '../styles/Home.module.css'
import Link from 'next/link';

type Props = {
  pageTitle: string;
  links: {
    title: string;
    route: string;
  }[];
}

const Header: React.FC<Props> = ({ pageTitle, links }) => {
  const pageLinks = links.map((link) =>
    <Link key={link.route} href={link.route}>
      <a className={styles.link}>{link.title}</a>
    </Link>
  );

  return (
    <header>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      <div className={styles.pageLinks}>
        { pageLinks }
      </div>
    </header>
  );
}

export default Header