export function getFirstCharToUpperCase(string) {
  const [firstChar, ...rest] = string;
  return `${firstChar.toUpperCase()}${rest.join('')}`;
}

export function sortByName(arr) {
  const data = [...arr];
  data.sort((a, b) => a.name.localeCompare(b.name, 'ru', { sensitivity: 'base' }));
  return data;
}

export function sortByBirthday(arr) {
  const data = [...arr];
  data.sort((a, b) => new Date(a.birthday) - new Date(b.birthday));
  return data;
}

const fullInclusiveFilter = (data, categoryName, categoryOptions) => {
  const checkedOptionsValues = categoryOptions
    .filter(({ isChecked }) => isChecked)
    .map(({ value }) => value);
  if (checkedOptionsValues.length === 0) return [];
  return data.filter((employee) => checkedOptionsValues.includes(employee[categoryName]));
};

const partiallyInclusiveFilter = (data, categoryName, categoryOptions) => {
  const checkedOptionsValues = categoryOptions
    .filter(({ isChecked }) => isChecked)
    .map(({ value }) => value);
  const defaultOptionValue = categoryOptions.filter((option) => option.default)[0].value;
  if (checkedOptionsValues.length === 0) {
    return data.filter((employee) => employee[categoryName] === defaultOptionValue);
  }
  return data.filter(
    (employee) =>
      checkedOptionsValues.includes(employee[categoryName]) ||
      employee[categoryName] === defaultOptionValue,
  );
};

const filterFunctions = {
  fullInclusive: fullInclusiveFilter,
  partiallyInclusive: partiallyInclusiveFilter,
};

export const filterEmployees = (employees, filters) => {
  const { categories, options } = filters;
  let result;
  categories.forEach(({ name, id, type }) => {
    const currentCategoryOptions = options.filter(({ categoryId }) => categoryId === id);
    result = result
      ? filterFunctions[type](result, name, currentCategoryOptions)
      : filterFunctions[type](employees, name, currentCategoryOptions);
  });
  return result;
};
