function countAllFromTown (regNum){
	var Stellies = [];
  	var reg = regNum.split(',');
  	for (var i = 0; i <reg.length;i++){
   	var registrationNum = reg[i];
    if (registrationNum.startsWith('CL')){
	Stellies.push(registrationNum);
    }
    }
  return Stellies.length;
}
