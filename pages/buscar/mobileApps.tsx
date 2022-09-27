import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../../styles/pages/mobileApps.module.css';

const MobileApps: NextPage = () => (
  <main className={styles.mobileAppsPage}>
    <Typography variant='h4'>
      Mobile
    </Typography>
  </main>
);

export default MobileApps;
