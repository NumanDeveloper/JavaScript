const getMinutes = (minutes) => {
  return minutes;
};

const calculateTime = () => {
  let totalMins = getMinutes(400);
  let totalHours = Math.floor(totalMins / 60);
  let remMins = totalMins % 60;

  console.log(`${totalHours} hours and ${remMins} mins.`);
};

calculateTime();