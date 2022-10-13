import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import styles from '../../styles/pages/webApps.module.css';

const WebApps: NextPage = () => (
  <main className={styles.webAppsPage}>
    <Navbar />
    <Typography variant='h4'>
      Web
    </Typography>
  </main>
);

export default WebApps;
