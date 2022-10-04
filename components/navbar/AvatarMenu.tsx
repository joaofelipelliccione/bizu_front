import * as React from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import {
  Box, Tooltip, IconButton, Menu, Avatar, MenuItem, Typography,
} from '@mui/material';
// import styles from '../../styles/components/navbar.module.css';

function AvatarMenu() {
  // const router = useRouter();
  const menuOptions = ['meu perfil', 'sair'];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{ width: '2rem', height: '2rem' }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '35px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {menuOptions.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default AvatarMenu;
