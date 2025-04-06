import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from '../../store/selectors';
import { setFilters } from '../../store/UISlice';
import { getFirstCharToUpperCase } from '../../utils/Common';
import Button from '../button/Button';
import dictionary from '../../utils/dictionary.js';
import styles from './FilterPanel.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const { categories, options: allOptions } = filters;
  const options = allOptions.filter((option) => !option.default);

  return (
    <div className={cx('filterPanel')}>
      <div className={cx('top')}>
        <span className={cx('title')}>Фильтр</span>
        <Button
          handleClick={() => dispatch(setFilters('default'))}
          size="medium"
          text="Сбросить кастомные фильтры"
          type="button"
        />
      </div>
      {categories.map(({ id, name }) => (
        <fieldset key={id}>
          <legend>{getFirstCharToUpperCase(dictionary[name])}</legend>
          {options
            .filter(({ categoryId }) => categoryId === id)
            .map(({ id, value, isChecked }) => (
              <div key={id}>
                <input
                  id={id}
                  type="checkbox"
                  name={value}
                  checked={isChecked}
                  onChange={() => dispatch(setFilters(id))}
                />
                <label htmlFor={id}>{getFirstCharToUpperCase(dictionary[value])}</label>
              </div>
            ))}
        </fieldset>
      ))}
    </div>
  );
}
