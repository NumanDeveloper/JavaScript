/*
 * Logic is very simple
 * `Point two pointers` to start and end of string respectively
 * `Traverse` in forward and backward at once
 * Continuously `compare` corresponding letter in a loop
 * If at any point, corresponding letters do not match, return `false`
 * If loop terminates successfully, return `true`
 */


const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1; // last index of str

  while (left < right) {
    // loop will terminate when left=right i.e when only one element is left behind
    if (str[left] !== str[right]) return false;
    left++; // move left forward
    right--; // move right backward
  }
  return true;
};

// Driver code
console.log(isPalindrome("123"));
