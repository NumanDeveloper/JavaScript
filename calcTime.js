const getMinutes = (minutes) =>{
    return minutes;
}

const calculateTime = () =>{
    let totalMins = getMinutes(323);
    let totalHours = totalMins / 60;
    let remMins = totalMins % 60;

    console.log(`${Math.floor(totalHours)} hours and ${remMins} mins.`)
}

calculateTime()
// console.log(18+60+25+70+80+70)