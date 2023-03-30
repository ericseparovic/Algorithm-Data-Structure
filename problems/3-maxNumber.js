function maxNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let num = numbers[0];
  let i = 0;

  do {
    if (numbers[i] > num) {
      num = numbers[i];
    }

    i++;
  } while (i < numbers.length);

  return num;
}

module.exports = maxNumber;
