import { ReactElement } from 'react';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }: { children: ReactElement }) => (
  <div className={styles.content}>
    <p>Header</p>
    {children}
    <p>Footer</p>
  </div>
);

export default Layout;
