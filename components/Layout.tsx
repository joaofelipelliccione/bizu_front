import { ReactElement } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactElement }) => (
  <div>
    <Navbar />
    <Box sx={ { height: '4rem' } } />
    {children}
  </div>
);

export default Layout;
