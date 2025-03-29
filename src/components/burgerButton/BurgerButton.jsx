import styles from './BurgerButton.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function BurgerButton({ handleClick }) {
  return (
    <button onClick={handleClick} className={cx('burgerButton')}>
      <div className={cx('layer')}></div>
      <div className={cx('layer')}></div>
      <div className={cx('layer')}></div>
    </button>
  );
}
