var transportFee = function(transportMoney){
  if('Morning'== transportMoney){
    return('R20');
  }
  if('Afternoon'== transportMoney){
    return('R10');
  }
  else{
    return('Free')
  }
}
