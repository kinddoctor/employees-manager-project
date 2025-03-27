export function getFirstCharToUpperCase(string) {
  const [firstChar, ...rest] = string;
  return `${firstChar.toUpperCase()}${rest.join('')}`;
}
