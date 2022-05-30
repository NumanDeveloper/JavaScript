const reverseNumber = (num) => {
  return (
    parseFloat(
      num
        .toString() // to string
        .split("") // to array
        .reverse() // reverse array
        .join("") // back to string
    ) * Math.sign(num) // multiply resulting number with sign of original number
  );
};

console.log(reverseNumber(-123.52));
