import { getFirstCharToUpperCase } from '../../utils/Common';
import Button from '../button/Button';
import styles from './FilterPanel.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const filters = [
  { id: 1, category: 'Должность', values: ['Повар', 'Водитель', 'Официант'] },
  { id: 2, category: 'Статус', values: ['В архиве'] },
];

export default function FilterPanel() {
  return (
    <div className={cx('filterPanel')}>
      <div className={cx('top')}>
        <span className={cx('title')}>Фильтр</span>
        <Button size="medium" text="Сбросить фильтры" type="button" />
      </div>
      {filters.map(({ id, category, values }) => (
        <fieldset key={id}>
          <legend>{getFirstCharToUpperCase(category)}</legend>
          {values.map((value) => (
            <div>
              <input key={value} type="checkbox" id={value} name={value} checked />
              <label htmlFor={value}>{getFirstCharToUpperCase(value)}</label>
            </div>
          ))}
        </fieldset>
      ))}
    </div>
  );
}
