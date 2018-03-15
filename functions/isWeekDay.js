  var isWeekday = function(day){
    return !day.startsWith('S');
  }
  console.log(isWeekday('Sunday'));
  console.log(isWeekday('Monday'));
