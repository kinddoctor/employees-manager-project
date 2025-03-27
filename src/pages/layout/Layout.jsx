import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function Layout() {
  return (
    <div className={cx('container')}>
      <Outlet />
    </div>
  );
}

export default Layout;
