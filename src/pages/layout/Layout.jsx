import { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { setDeviceSize } from '../../store/UISlice';
import styles from './Layout.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function Layout() {
  const dispatch = useDispatch();
  const [viewSize, setViewSize] = useState('desktop');

  useLayoutEffect(() => {
    function updateSize() {
      let deviceSize;
      if (window.innerWidth >= 1280) {
        deviceSize = 'desktop';
      } else if (window.innerWidth < 1280 && window.innerWidth > 769) {
        deviceSize = 'tablet';
      } else if (window.innerWidth <= 768) {
        deviceSize = 'mobile';
      }
      setViewSize(deviceSize);
      dispatch(setDeviceSize(deviceSize));
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className={cx('container')}>
      <div className={cx('content', { smallDevice: viewSize !== 'desktop' })}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
