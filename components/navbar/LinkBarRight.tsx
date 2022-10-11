import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, IconButton } from '@mui/material';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import styles from '../../styles/components/navbar.module.css';

function LinkBarRight() {
  const router = useRouter();

  return (
    <Grid
      className={styles.linkBarLeft}
      container
      alignItems={'center'}
      sx={{ width: 'fit-content' }}
    >
      <IconButton
        aria-label="Botão de acesso à página de doações."
        onClick={() => router.push('/doar')}
        sx={{
          alignSelf: 'center',
          width: 'fit-content',
        }}
      >
        <ShowChartRoundedIcon />
      </IconButton>
    </Grid>
  );
}

export default LinkBarRight;
