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
