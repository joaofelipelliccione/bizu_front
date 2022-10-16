import type { NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/redux/useRedux';
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
import LoginBtn from '../buttons/LoginBtn';

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

const FirstSection: NextPage = () => {
  const currentUserInfo = useAppSelector((state) => state.users);

  return (
    <Grid
      className={styles.homePage1stSection}
      container
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
      <Grid
        container
        flexDirection={'column'}
        alignSelf={'center'}
        textAlign={'center'}
        width={'fit-content'}
        sx={{
          width: {
            xs: '85%', sm: '65%', md: '70%', lg: '75%',
          },
        }}
      >
        <Grid item>
          <Typography
            alignSelf={'center'}
            variant='h1'
            color={'primary'}
            marginBottom={'1rem'}
          >
          ux e ui testado e aprovado
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='h2'
            color={'primary'}
            marginBottom={'2rem'}
          >
          desenvolva novos fluxos em minutos com milhares de referências ao seu alcance!
          </Typography>
        </Grid>
        <Grid item>
          {!currentUserInfo.id && <LoginBtn btnText={'passa o bizu'} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
