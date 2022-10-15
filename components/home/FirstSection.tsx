import type { NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import Img from '../images/Img';
import logoNubank from '../../assets/homePage/logoNubank.png';
import logoRappi from '../../assets/homePage/logoRappi.png';
import styles from '../../styles/pages/home.module.css';

const appsLogos = [
  {
    id: 1, appClass: styles.nubankLogo, appName: 'Nubank', appImgSrc: logoNubank,
  },
  {
    id: 2, appClass: styles.rappiLogo, appName: 'Rappi', appImgSrc: logoRappi,
  },
];

const FirstSection: NextPage = () => (
  <Grid
    container
    className={styles.homePage1stSection}
  >
    {appsLogos.map(({
      id, appClass, appName, appImgSrc,
    }) => (
      <Img
        key={id}
        imgClassName={appClass}
        imgSrc={appImgSrc}
        imgAlt={`Logo do ${appName}`}
      />
    ))}
    <Typography alignSelf={'center'}>Olá Mundo</Typography>
  </Grid>
);

export default FirstSection;
