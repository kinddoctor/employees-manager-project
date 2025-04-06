import styles from './Button.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function Button({ handleClick, size, text, type, wasActivated }) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={cx('button', size, { active: wasActivated })}
    >
      {text}
    </button>
  );
}
