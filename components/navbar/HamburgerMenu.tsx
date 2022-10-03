import * as React from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import {
  Box, IconButton, Menu, MenuItem, Typography,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from '../../styles/components/navbar.module.css';

function HamburgerMenu() {
  // const router = useRouter();
  const menuOptions = ['mobile apps', 'web apps', 'propósito', 'doação'];

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
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElHamburger)}
        onClose={handleCloseMenu}
      >
        {menuOptions.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default HamburgerMenu;
