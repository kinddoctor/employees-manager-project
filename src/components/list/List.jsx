import styles from './List.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function List({ list }) {
  return (
    <table className={cx('table')}>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Должность</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, name, phone, role }) => (
          <tr key={id} className={cx('list-item')}>
            <td className={cx('name')}>{name}</td>
            <td className={cx('role')}>{role}</td>
            <td className={cx('phone')}>{phone}</td>
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
