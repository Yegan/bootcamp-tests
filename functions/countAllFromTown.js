function countAllFromTown (regNum, Loc){
	var Stellies = [];
  	var reg = regNum.split(',');
  	for (var i = 0; i <reg.length;i++){
   	var registrationNum = reg[i];
    if (registrationNum.startsWith(Loc)){
	Stellies.push(registrationNum);
    }
    }
  return Stellies.length;
}
