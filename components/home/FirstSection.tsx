import type { NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import Img from '../images/Img';
import logoNubank from '../../assets/homePage/logoNubank.png';
import logoRappi from '../../assets/homePage/logoRappi.png';
import logoPicPay from '../../assets/homePage/logoPicPay.png';
import logoIfood from '../../assets/homePage/logoIfood.png';
import logoRocketseat from '../../assets/homePage/logoRocketseat.png';
import logoEnjoei from '../../assets/homePage/logoEnjoei.png';
import logoZeDelivery from '../../assets/homePage/logoZeDelivery.png';
import logoReiDoPitaco from '../../assets/homePage/logoReiDoPitaco.png';
import styles from '../../styles/pages/home.module.css';

const appsLogos = [
  {
    id: 1, appClass: styles.logoNubank, appName: 'Nubank', appImgSrc: logoNubank,
  },
  {
    id: 2, appClass: styles.logoRappi, appName: 'Rappi', appImgSrc: logoRappi,
  },
  {
    id: 3, appClass: styles.logoPicPay, appName: 'Pic Pay', appImgSrc: logoPicPay,
  },
  {
    id: 4, appClass: styles.logoIfood, appName: 'ifood', appImgSrc: logoIfood,
  },
  {
    id: 5, appClass: styles.logoRocketseat, appName: 'Rocketseat', appImgSrc: logoRocketseat,
  },
  {
    id: 6, appClass: styles.logoEnjoei, appName: 'Enjoei', appImgSrc: logoEnjoei,
  },
  {
    id: 7, appClass: styles.logoZeDelivery, appName: 'Zé Delivery', appImgSrc: logoZeDelivery,
  },
  {
    id: 8, appClass: styles.logoReiDoPitaco, appName: 'Rei do Pitaco', appImgSrc: logoReiDoPitaco,
  },
];

const FirstSection: NextPage = () => (
  <Grid
    container
    className={styles.homePage1stSection}
    justifyContent={'center'}
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
