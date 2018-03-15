describe('regCheck', function(){
  it('It should check whether it is a registration number',function(){
    assert.equal(regCheck('123 456 GP','GP'),true);
  });

  it('It should check whether it is a registration number',function(){
    assert.equal(regCheck('GP 123 456','GP'),false);
  });


});
