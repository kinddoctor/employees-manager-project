import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployees } from '../../store/employeesSlice';
import { employeesSelectors } from '../../store/employeesSlice';
import {
  selectDeviceSize,
  selectSortingFunc,
  selectFilters,
} from '../../store/selectors';
import SidePanel from '../../components/sidePanel/SidePanel';
import List from '../../components/list/List';
import BurgerButton from '../../components/burgerButton/BurgerButton';
import * as utilsFunctions from '../../utils/Common';
import styles from './Catalog.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function Catalog() {
  const dispatch = useDispatch();
  const deviceSize = useSelector(selectDeviceSize);
  const [forcedShowing, toggleForcedShowing] = useState(false);

  const employees = useSelector(employeesSelectors.selectAll);
  const sortingFunc = utilsFunctions[useSelector(selectSortingFunc)];
  const sortedEmployees = sortingFunc ? sortingFunc(employees) : employees;

  const filters = useSelector(selectFilters);
  const filteredEmployees = utilsFunctions.filterEmployees(sortedEmployees, filters);

  useEffect(() => {
    const requestData = () =>
      fetch('employees.json')
        .then((response) => response.json())
        .then((data) => dispatch(addEmployees(data)));
    requestData();
  }, []);

  return (
    <div className={cx('catalog')}>
      <div className={cx('hide', { show: deviceSize === 'mobile' && !forcedShowing })}>
        <BurgerButton handleClick={() => toggleForcedShowing(!forcedShowing)} />
      </div>
      <div className={cx('aside', { hide: deviceSize === 'mobile' && !forcedShowing })}>
        <button
          onClick={() => toggleForcedShowing(!forcedShowing)}
          className={cx('btn-close', { show: deviceSize === 'mobile' && forcedShowing })}
        >
          X
        </button>
        <SidePanel />
      </div>
      <div className={cx('main', { smallDevice: deviceSize !== 'desktop' })}>
        <List mobileDevice={deviceSize === 'mobile'} list={filteredEmployees} />
      </div>
    </div>
  );
}
