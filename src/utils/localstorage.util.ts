export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
}

export const setLocalStorage = (key: string, value: unknown) => {
  return localStorage.setItem(key, JSON.stringify(value));
}