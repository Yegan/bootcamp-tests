describe('fromWhere',function(){
  it('Check registration numbers from a specific town', function () {
    assert.equal(fromWhere('CY'),('Bellville'))
  });
  it('Check registration numbers from a specific town', function () {
    assert.equal(fromWhere('CA'),('Cape Town'))
  });
  it('Check registration numbers from a specific town', function () {
    assert.equal(fromWhere('Any place'),('Some other place'))
  });
});
