import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import styles from '../../styles/pages/mobileApps.module.css';

const MobileApps: NextPage = () => (
  <main className={styles.mobileAppsPage}>
    <Navbar />
    <Typography variant='h4'>
      Mobile
    </Typography>
  </main>
);

export default MobileApps;
