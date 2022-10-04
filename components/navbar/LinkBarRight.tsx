import * as React from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { Grid, IconButton } from '@mui/material';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import styles from '../../styles/components/navbar.module.css';

function LinkBarRight() {
  // const router = useRouter();

  return (
    <Grid
      className={styles.linkBarLeft}
      container
      alignItems={'center'}
      sx={{ width: 'fit-content' }}
    >
      <Link href="/" passHref>
        <IconButton
          aria-label="suporte financeiro"
          sx={{
            alignSelf: 'center',
            width: 'fit-content',
          }}
        >
          <ShowChartRoundedIcon />
        </IconButton>
      </Link>
    </Grid>
  );
}
export default LinkBarRight;
