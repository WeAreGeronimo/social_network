/* eslint-disable */
export const beautifulWhenTimeText = (timeFromStore) => {
  const timeNOW = Date.now();
  const deltaTimeInSeconds = Math.floor(
    (timeNOW - timeFromStore) / 1000,
  );
  const deltaTimeInMinutes = Math.floor(deltaTimeInSeconds / 60);

  const deltaTimeInHours = Math.floor(deltaTimeInMinutes / 60);

  const deltaTimeInDays = Math.floor(deltaTimeInHours / 24);

  if (deltaTimeInSeconds < 10) return 'Обновлено только что';
  else if (deltaTimeInSeconds >= 10 && deltaTimeInSeconds < 30)
    return 'Обновлено менее 30 секунд назад';
  else if (deltaTimeInSeconds >= 30 && deltaTimeInSeconds < 60)
    return 'Обновлено менее минуты назад';
  else if (deltaTimeInMinutes >= 1 && deltaTimeInMinutes < 2)
    return 'Обновлено минуту назад';
  else if (deltaTimeInMinutes >= 2 && deltaTimeInMinutes < 3)
    return 'Обновлено две минуты назад';
  else if (deltaTimeInMinutes >= 3 && deltaTimeInMinutes < 4)
    return 'Обновлено три минуты назад';
  else if (deltaTimeInMinutes >= 4 && deltaTimeInMinutes < 5)
    return 'Обновлено четыре минуты назад';
  else if (deltaTimeInMinutes >= 5 && deltaTimeInMinutes < 6)
    return 'Обновлено пять минут назад';
  else if (deltaTimeInMinutes >= 6 && deltaTimeInMinutes < 7)
    return 'Обновлено шесть минут назад';
  else if (deltaTimeInMinutes >= 7 && deltaTimeInMinutes < 8)
    return 'Обновлено семь минут назад';
  else if (deltaTimeInMinutes >= 8 && deltaTimeInMinutes < 9)
    return 'Обновлено восемь минут назад';
  else if (deltaTimeInMinutes >= 9 && deltaTimeInMinutes < 10)
    return 'Обновлено девять минут назад';
  else if (deltaTimeInMinutes >= 10 && deltaTimeInMinutes < 11)
    return 'Обновлено десять минут назад';
  else if (deltaTimeInMinutes >= 15 && deltaTimeInMinutes < 16)
    return 'Обновлено 15 минут назад';
  else if (deltaTimeInMinutes >= 30 && deltaTimeInMinutes < 60)
    return 'Обновлено 30 минут назад';
  else if (deltaTimeInMinutes >= 60 && deltaTimeInMinutes < 2)
    return 'Обновлено 1 час назад';
  else if (deltaTimeInHours >= 2 && deltaTimeInHours < 3)
    return 'Обновлено 2 часа назад';
  else if (deltaTimeInHours >= 3 && deltaTimeInHours < 4)
    return 'Обновлено 3 часа назад';
  else if (deltaTimeInHours >= 4 && deltaTimeInHours < 24)
    return 'Обновлено сегодня';
  else if (deltaTimeInDays >= 1 && deltaTimeInDays < 2)
    return 'Обновлено вчера';
  else if (deltaTimeInDays >= 2 && deltaTimeInDays < 3)
    return 'Обновлено позавчера';
  else if (deltaTimeInDays >= 3 && deltaTimeInDays < 4)
    return 'Обновлено вчера';
  else if (deltaTimeInDays > 3 )
    return wordCorrect(deltaTimeInDays);
};

const twoOrOneLastNumbersInValue = (value) => {
  const valueToString = value.toString();
  const valueLength = valueToString.length;
  if (valueLength === 1 || valueLength === 2) {
    if (value >= 1 && value <= 14) return valueToString;
    if (value > 14 && value <= 99) {
      const lastNumberInArray = valueLength - 1;
      const lastNumber = value.toString()[lastNumberInArray];
      return lastNumber;
    }
    return null;
  }
  if (valueLength >= 3) {
    const lastNumberInArray = valueLength - 1;
    const preLastNumberInArray = valueLength - 2;
    const lastNumber = value.toString()[lastNumberInArray];
    const preLastNumber = value.toString()[preLastNumberInArray];
    const twolast = preLastNumber + lastNumber;
    if (twolast > 10 && twolast <= 14) {
      return twolast;
    }

    return lastNumber;
  }
};

const wordCorrect = (day) => {
  const lastNumber = twoOrOneLastNumbersInValue(day);

  if (lastNumber === '1') {
    return `Обновлено ${day} день назад`;
  }
  if (
    lastNumber === '2' ||
    lastNumber === '3' ||
    lastNumber === '4'
  ) {
    return `Обновлено ${day} дня назад`;
  }
  if (
    lastNumber === '5' ||
    lastNumber === '6' ||
    lastNumber === '7' ||
    lastNumber === '8' ||
    lastNumber === '9' ||
    lastNumber === '0' ||
    lastNumber === '10'
  ) {
    return `Обновлено ${day} дней назад`;
  }
  if (lastNumber > 10 && lastNumber <= 14) {
    return `Обновлено ${day} дней назад`;
  }
  return null;
};
