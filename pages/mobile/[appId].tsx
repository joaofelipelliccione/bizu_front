import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import styles from '../../styles/pages/mobileApp.module.css';

const MobileApp: NextPage = () => {
  const router = useRouter();
  const { appId } = router.query;

  return (
    <main className={styles.mobileAppPage}>
      <Navbar />
      <Typography variant='h4'>
      Página do app {appId}
      </Typography>
    </main>
  );
};

export default MobileApp;
