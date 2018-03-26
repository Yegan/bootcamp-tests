function countAllPaarl (regNum){
  var paarl = [];
  	var reg = regNum.split(', ');
  	for (var i = 0; i<reg.length;i++){
      var registrationNum = reg[i];
       if (registrationNum.startsWith('CJ')){
        paarl.push(registrationNum);
       }
    }
  return paarl.length;

}
