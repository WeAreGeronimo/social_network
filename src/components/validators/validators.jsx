export const required = (value) => {
  if (value) return undefined;
  return 'Это поле обязательно к заполнению.';
};
