export function createSearchParams(obj: { [key: string]: string | number | string[] | number[] | undefined } = {}, base = '') {
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

export function nullCheck<T>({ data, keys }: { data: T; keys: Array<keyof T> }): boolean {
  return !keys.some(key => {
    if (!data[key] || data[key].toString() === '') return true;
  });
}

export const isEnglish = (str: string) => /^[a-zA-Z\s]*$/.test(str);

export const isKorean = (str: string) => /^[ㄱ-힣\s]*$/.test(str);

export const isNumber = (str: string) => /^[0-9]*$/.test(str);

export function isEmail(email: string) {
  return /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
    email
  );
}

export const isPhoneNumber = (str: string) => /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}$/.test(str);
