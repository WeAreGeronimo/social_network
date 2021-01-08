/* eslint-disable */
export const beautifulWhenTimeText = (timeFromStore) => {
  const timeNOW = Date.now();
  const deltaTimeInSeconds = Math.floor(
    (timeNOW - +timeFromStore) / 1000,
  );
  const deltaTimeInMinutes = Math.floor(deltaTimeInSeconds / 60);

  const deltaTimeInHours = Math.floor(deltaTimeInMinutes / 60);

  const deltaTimeInDays = Math.floor(deltaTimeInHours / 24);
  if (deltaTimeInSeconds < 10) return ' только что';
  else if (deltaTimeInSeconds >= 10 && deltaTimeInSeconds < 30)
    return wordCorrect(deltaTimeInSeconds, 's');
  else if (deltaTimeInSeconds >= 30 && deltaTimeInMinutes < 1)
    return wordCorrect(deltaTimeInSeconds, 's');
  else if (deltaTimeInMinutes >= 1 && deltaTimeInHours < 1)
    return wordCorrect(deltaTimeInMinutes, 'm');
  else if (deltaTimeInHours >= 1 && deltaTimeInDays < 1)
    return wordCorrect(deltaTimeInHours, 'h');
  else if (deltaTimeInDays >= 1 && deltaTimeInDays < 2)
    return ' вчера';
  else if (deltaTimeInDays >= 2 && deltaTimeInDays < 3)
    return ' позавчера';
  else if (deltaTimeInDays >= 3)
    return wordCorrect(deltaTimeInDays, 'd');
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

const wordCorrect = (count, timeMeasure) => {
  const lastNumber = twoOrOneLastNumbersInValue(count);

  if (+lastNumber === 1) {
    if (timeMeasure === 's') {
      return ` ${count} секунду назад`;
    }
    if (timeMeasure === 'm') {
      return ` ${count} минуту назад`;
    }
    if (timeMeasure === 'h') {
      return ` ${count} час назад`;
    }
    if (timeMeasure === 'd') {
      return ` ${count} день назад`;
    }
  }
  if (+lastNumber >= 2 && +lastNumber <= 4) {
    if (timeMeasure === 's') {
      return ` ${count} секунды назад`;
    }
    if (timeMeasure === 'm') {
      return ` ${count} минуты назад`;
    }
    if (timeMeasure === 'h') {
      return ` ${count} часа назад`;
    }
    if (timeMeasure === 'd') {
      return ` ${count} дня назад`;
    }
  }
  if ((+lastNumber >= 5 && +lastNumber <= 14) || +lastNumber === 0) {
    if (timeMeasure === 's') {
      return ` ${count} секунд назад`;
    }
    if (timeMeasure === 'm') {
      return ` ${count} минут назад`;
    }
    if (timeMeasure === 'h') {
      return ` ${count} часов назад`;
    }
    if (timeMeasure === 'd') {
      return ` ${count} дней назад`;
    }
  }
  return null;
};
