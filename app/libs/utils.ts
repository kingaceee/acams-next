export function createSearchParams(
  obj: { [key: string]: string | number | string[] | number[] | undefined } = {},
  base = ''
) {
  const result = Object.keys(obj)
    .reduce((searchParams, key) => {
      const value = obj[key];
      if (Array.isArray(value)) {
        searchParams.delete(key);
        value.forEach((item: string | number) => searchParams.append(key, item.toString()));
      } else if (value !== undefined) searchParams.set(key, value.toString());
      else searchParams.delete(key);
      return searchParams;
    }, new URLSearchParams(base))
    .toString();

  return result === '' ? '' : `?${result}`;
}
