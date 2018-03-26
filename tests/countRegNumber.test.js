describe('The count registration number function', function(){
    it('The function should count the number of registration numbers in a list, which is 3', function(){
      assert.equal(countRegNumber('CA123456, CA456789, CA654321'), 3);
    });

it('The function should count the number of registration numbers in a list, which is 2', function(){
  assert.equal(countRegNumber('CA987654, CA655987'), 2);
});

it('The function should count the number of registration numbers in a list even when there is no input', function(){
  assert.equal(countRegNumber(''), 0);
});


});
