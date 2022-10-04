import * as React from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import {
  Box, IconButton, Menu, MenuItem,
} from '@mui/material';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import styles from '../../styles/components/navbar.module.css';

function HamburgerMenu() {
  // const router = useRouter();

  const [anchorElHamburger, setAnchorElHamburger] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElHamburger(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElHamburger(null);
  };

  return (
    <Box
      className={styles.hamburgerMenu}
      sx={{ flexGrow: 0 }}
    >
      <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        sx={{ mt: '30px' }}
        id="menu-appbar"
        anchorEl={anchorElHamburger}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElHamburger)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <IconButton
            aria-label="Botão de acesso à página 'mobile'."
            sx={{
              width: '1.2rem',
              height: '1.1rem',
            }}
          >
            <SmartphoneRoundedIcon sx={{ width: '1.2rem' }} />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <IconButton
            aria-label="Botão de acesso à página 'web'."
            sx={{
              width: '1.2rem',
              height: '1.1rem',
            }}
          >
            <LaptopRoundedIcon sx={{ width: '1.2rem' }} />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <IconButton
            aria-label="Botão de acesso à página de doações."
            sx={{
              width: '1.2rem',
              height: '1.1rem',
            }}
          >
            <ShowChartRoundedIcon sx={{ width: '1.2rem' }} />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <IconButton
            aria-label="Botão de logout."
            color='error'
            sx={{
              width: '1.2rem',
              height: '1.1rem',
            }}
          >
            <LogoutTwoToneIcon sx={{ width: '1.2rem' }} />
          </IconButton>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default HamburgerMenu;
