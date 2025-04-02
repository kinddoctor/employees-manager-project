import { setSortingFunc } from '../../store/UISlice';
import { useDispatch } from 'react-redux';
import Button from '../button/Button';
import styles from './SortingPanel.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function SortingPanel() {
  const dispatch = useDispatch();

  return (
    <div className={cx('panel')}>
      <span className={cx('title')}>Сортировать по:</span>
      <div className={cx('button-group')}>
        <Button
          handleClick={() => dispatch(setSortingFunc('sortByName'))}
          size="medium"
          text="имени"
          type="button"
        />
        <Button
          handleClick={() => dispatch(setSortingFunc('sortByBirthday'))}
          size="medium"
          text="дате рождения"
          type="button"
        />
      </div>
    </div>
  );
}
