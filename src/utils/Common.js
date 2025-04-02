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

// const data = [
//   { name: 'при', birthday: '06.07.1990' },
//   { name: 'oпри', birthday: '06.08.1991' },
//   { name: 'апри', birthday: '06.07.1995' },
//   { name: 'лпри', birthday: '01.07.1990' },
// ];

// console.log(JSON.stringify(sortByBirthday(data)));
