import SortingPanel from '../sortingPanel/SortingPanel';
import FilterPanel from '../filterPanel/FilterPanel';
import Button from '../button/Button';

import styles from './SidePanel.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function SidePanel() {
  return (
    <div className={cx('sidePanel')}>
      <SortingPanel />
      <FilterPanel />
      <Button size={'big'} text="Добавить нового сотрудника" type="submit" />
    </div>
  );
}
