import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../../styles/pages/webApps.module.css';

const WebApps: NextPage = () => (
  <main className={styles.webAppsPage}>
    <Typography variant='h4'>
      Web
    </Typography>
  </main>
);

export default WebApps;
