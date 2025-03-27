import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, addEmployees, updateEmployee } from '../../store/employeesSlice';
import { employeesSelectors } from '../../store/employeesSlice';
import SidePanel from '../../components/sidePanel/SidePanel';
import List from '../../components/list/List';

import styles from './Catalog.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function Catalog() {
  const dispatch = useDispatch();
  const employees = useSelector(employeesSelectors.selectAll);

  useEffect(() => {
    const requestData = () =>
      fetch('employees.json')
        .then((response) => response.json())
        .then((data) => dispatch(addEmployees(data)));
    requestData();
  }, []);

  return (
    <div className={cx('content')}>
      <div className={cx('aside')}>
        <SidePanel />
      </div>
      <div className={cx('main')}>
        <List list={employees} />
      </div>
    </div>
  );
}
