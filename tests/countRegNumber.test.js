describe('countRegNumber', function(){
    it('Count the number of registration plates in a string', function(){
      assert.equal(countRegNumber('CA123456, CA456789, CA654321'), 3);
    });

it('Count the number of registration plates in a string', function(){
  assert.equal(countRegNumber('CA987654, CA655987'), 2);
});

});
