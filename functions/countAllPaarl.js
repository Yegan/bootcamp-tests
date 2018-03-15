var countAllPaarl = function(Paarl){
    var regPaarl = [];
    var reg = Paarl.split(', ');
    for(var i= 0; i<reg.length;i++){
      var Paarlreg = reg[i];
      if(Paarlreg.startsWith('CJ')){
        regPaarl.push(Paarlreg);
      }
    }
  return regPaarl.length;
}
