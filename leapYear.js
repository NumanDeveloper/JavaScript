const leapYear = (year) => {
  let isLeap = false;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) isLeap = true;
    } else isLeap = true;
  }

  return isLeap;
};

// driver code
leapYear(2014) ? console.log("Leap Year !!") : console.log("Not a Leap Year !!");
