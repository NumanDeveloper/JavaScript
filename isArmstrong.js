// * Armstrong Number Checker * //
/*
 * A number is armstrong if the sum of cube of its digits is equal to the number
 * itself.
 */

const isArmstrong = (num) => {
  let sum = 0,
    temp,
    digit;
    
  temp = num;

  while (temp > 0) {
    digit = temp % 10;
    sum = sum + digit * digit * digit;
    temp = Math.trunc(temp / 10);
  }

  if (sum === num) return true;

  return false;
};

// Driver Code
console.log(isArmstrong(371) ? "Armstrong" : "Not Armstrong");
