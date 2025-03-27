import Button from '../button/Button';

import styles from './SortingPanel.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function SortingPanel() {
  return (
    <div className={cx('panel')}>
      <span className={cx('title')}>Сортировать по:</span>
      <div className={cx('button-group')}>
        <Button size="medium" text="имени" type="button" />
        <Button size="medium" text="дате рождения" type="button" />
      </div>
    </div>
  );
}
