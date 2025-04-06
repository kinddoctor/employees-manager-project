import { setSortingFunc } from '../../store/UISlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button/Button';
import styles from './SortingPanel.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function SortingPanel() {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className={cx('panel')}>
      <span className={cx('title')}>Сортировать по:</span>
      <div className={cx('button-group')}>
        <Button
          handleClick={() => {
            setActiveButton('name');
            dispatch(setSortingFunc('sortByName'));
          }}
          size="medium"
          text="имени"
          type="button"
          wasActivated={activeButton === 'name'}
        />
        <Button
          handleClick={() => {
            setActiveButton('birthday');
            dispatch(setSortingFunc('sortByBirthday'));
          }}
          size="medium"
          text="дате рождения - сначала опытные"
          type="button"
          wasActivated={activeButton === 'birthday'}
        />
      </div>
    </div>
  );
}
