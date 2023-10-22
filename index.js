//Sleep Debt Calculator
const getSleepHours = day => {
switch(day){
  case 'Monday':
  return 8;
  break;
  case 'Tuesday':
  return 7;
  break;
  case 'Wednesday':
  return 6;
  break;
  case 'Thursday':
  return 5;
  break;
  case 'Friday':
  return 4;
  break;
  case 'Saturday':
  return 3;
  break;
  case 'Sunday':
  return 2;
  break;
}
};
//function to get sleep hours
const getActualSleepHours = () =>{
  return getSleepHours("Monday") + getSleepHours("Tuesday")+getSleepHours("Wednesday") + getSleepHours("Thursday")+getSleepHours("Friday") + getSleepHours("Saturday")+getSleepHours("Sunday")
};
//function to find ideal sleep
const getIdealSleepHours = () =>{
  let idealHours = 8;
  return idealHours*7;
};
//Calculator
const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours){
    return console.log('Perfect amount of Sleep.');
  }else if (actualSleepHours > idealSleepHours){
    return console.log("You got" + (actualSleepHours - idealSleepHours) 
    + 'hours more sleep.');
  }else if (actualSleepHours < idealSleepHours){
    return console.log("You should get some rest because you got " + (idealSleepHours - actualSleepHours) + " hours less sleep.");
  }else{
    return console.log("Error")
  }
 };
console.log(calculateSleepDebt());
