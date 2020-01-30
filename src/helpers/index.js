import FormValidator from "./form-validator";


const bigFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);


function dataPeriod() {
  function dataFormat(date) {
    const addZero = (_date) => ("0" + _date).slice(-2);
    
    return date.getFullYear() + "-"
      + addZero(date.getMonth() + 1) + "-"
      + addZero(date.getDate())
  }
  
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  
  return {
    currentDate: dataFormat(new Date()), //"2020-01-28"
    nextMonth: dataFormat(date) //"2020-02-28"
  }
}


export {
  bigFirstLetter,
  dataPeriod,
  FormValidator
}