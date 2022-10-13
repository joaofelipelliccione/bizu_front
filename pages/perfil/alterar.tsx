import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import styles from '../../styles/pages/updateProfile.module.css';

const UpdateProfile: NextPage = () => (
  <main className={styles.updateProfilePageMain}>
    <Navbar />
    <Typography variant='h4'>
      Atualize seu perfil
    </Typography>
  </main>
);

export default UpdateProfile;
