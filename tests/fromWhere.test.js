describe('The from where function',function(){
  it('The function should check where a specific registration number is from', function () {
    assert.equal(fromWhere('CY'),('Bellville'))
  });
  it('The function should check where a specific registration number is from', function () {
    assert.equal(fromWhere('CA'),('Cape Town'))
  });
  it('The function should check where a specific registration number is from', function () {
    assert.equal(fromWhere('Any place'),('Some other place'))
  });
});
