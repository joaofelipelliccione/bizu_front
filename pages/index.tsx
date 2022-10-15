import type { NextPage } from 'next';
import Navbar from '../components/navbar/Navbar';
import FirstSection from '../components/home/FirstSection';
import styles from '../styles/pages/home.module.css';

const Home: NextPage = () => (
  <main className={styles.homePageMain}>
    <Navbar />
    <FirstSection />
  </main>
);

export default Home;
