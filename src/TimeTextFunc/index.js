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
    return 'Обновленно менее 30 секунд назад';
  else if (deltaTimeInSeconds >= 30 && deltaTimeInSeconds < 60)
    return 'Обновленно менее минуты назад';
  else if (deltaTimeInMinutes >= 1 && deltaTimeInMinutes < 2)
    return 'Обновленно минуту назад';
  else if (deltaTimeInMinutes >= 2 && deltaTimeInMinutes < 3)
    return 'Обновленно две минуты назад';
  else if (deltaTimeInMinutes >= 3 && deltaTimeInMinutes < 4)
    return 'Обновленно три минуты назад';
  else if (deltaTimeInMinutes >= 4 && deltaTimeInMinutes < 5)
    return 'Обновленно четыре минуты назад';
  else if (deltaTimeInMinutes >= 5 && deltaTimeInMinutes < 6)
    return 'Обновленно пять минут назад';
  else if (deltaTimeInMinutes >= 6 && deltaTimeInMinutes < 7)
    return 'Обновленно шесть минут назад';
  else if (deltaTimeInMinutes >= 7 && deltaTimeInMinutes < 8)
    return 'Обновленно семь минут назад';
  else if (deltaTimeInMinutes >= 8 && deltaTimeInMinutes < 9)
    return 'Обновленно восемь минут назад';
  else if (deltaTimeInMinutes >= 9 && deltaTimeInMinutes < 10)
    return 'Обновленно девять минут назад';
  else if (deltaTimeInMinutes >= 10 && deltaTimeInMinutes < 11)
    return 'Обновленно десять минут назад';
  else if (deltaTimeInMinutes >= 15 && deltaTimeInMinutes < 16)
    return 'Обновленно 15 минут назад';
  else if (deltaTimeInMinutes >= 30 && deltaTimeInMinutes < 60)
    return 'Обновленно 30 минут назад';
  else if (deltaTimeInMinutes >= 60 && deltaTimeInMinutes < 2)
    return 'Обновленно 1 час назад';
  else if (deltaTimeInHours >= 2 && deltaTimeInHours < 3)
    return 'Обновленно 2 часа назад';
  else if (deltaTimeInHours >= 3 && deltaTimeInHours < 4)
    return 'Обновленно 3 часа назад';
  else if (deltaTimeInHours >= 4 && deltaTimeInHours < 5)
    return 'Обновленно сегодня';
  else if (deltaTimeInDays >= 1 && deltaTimeInDays < 2)
    return 'Обновленно вчера';
  else if (deltaTimeInDays >= 2 && deltaTimeInDays < 3)
    return 'Обновленно позавчера';
  else if (deltaTimeInDays >= 3 && deltaTimeInDays < 2)
    return 'Обновленно вчера';
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
    return `Обновленно ${day} день назад`;
  }
  if (
    lastNumber === '2' ||
    lastNumber === '3' ||
    lastNumber === '4'
  ) {
    return `Обновленно ${day} дня назад`;
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
    return `Обновленно ${day} дней назад`;
  }
  if (lastNumber > 10 && lastNumber <= 14) {
    return `Обновленно ${day} дней назад`;
  }
  return null;
};
