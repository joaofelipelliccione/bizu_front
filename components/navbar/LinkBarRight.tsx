import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, IconButton, Tooltip } from '@mui/material';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
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
      <Tooltip title='nos ajude a crescer :)'>
        <span>
          <IconButton
            aria-label="Botão de acesso à página de doações."
            onClick={() => router.push('/doar')}
            sx={{
              alignSelf: 'center',
              width: 'fit-content',
            }}
          >
            <SavingsRoundedIcon />
          </IconButton>
        </span>
      </Tooltip>
    </Grid>
  );
}

export default LinkBarRight;
