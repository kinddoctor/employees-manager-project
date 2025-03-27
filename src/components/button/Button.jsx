import styles from './Button.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function Button({ size, text, type }) {
  return (
    <button type={type} className={cx('button', size)}>
      {text}
    </button>
  );
}
