import type { NextPage } from 'next';
import Navbar from '../components/navbar/Navbar';
import FirstSection from '../components/home/FirstSection';
import SecondSection from '../components/home/SecondSection';
import styles from '../styles/pages/home.module.css';

const Home: NextPage = () => (
  <main className={styles.homePageMain}>
    <Navbar />
    <FirstSection />
    <SecondSection />
  </main>
);

export default Home;
