sumOfDigits = (num) => {
  let sum = 0;

  while (num != 0) {
    sum += num % 10; // getting rightmost digit
    num = parseInt(num / 10); // removing rightmost digit and decimal part
  }

  return sum;
};

console.log(sumOfDigits(466));
