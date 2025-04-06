import dictionary from '../../utils/dictionary.js';
import styles from './List.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function List({ list, mobileDevice }) {
  return (
    <table className={cx('table')}>
      <thead>
        <tr>
          <th className={cx({ mobileDevice: mobileDevice })}>Имя</th>
          <th className={cx({ mobileDevice: mobileDevice })}>Должность</th>
          <th className={cx({ mobileDevice: mobileDevice })}>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, name, phone, role }) => (
          <tr key={id} className={cx('list-item')}>
            <td className={cx('name', { mobileDevice: mobileDevice })}>{name}</td>
            <td className={cx('role', { mobileDevice: mobileDevice })}>
              {dictionary[role]}
            </td>
            <td className={cx('phone', { mobileDevice: mobileDevice })}>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

{
  /* <div>
<div className={cx('list-header')}></div>
{list.map(({ id, name, phone, role }) => (
  <div key={id} className={cx('list-item')}>
    <div className={cx('name')}>{name}</div>
    <div className={cx('role')}>{role}</div>
    <div className={cx('phone')}>{phone}</div>
  </div>
))}
</div> */
}
