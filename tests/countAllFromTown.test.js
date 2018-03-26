describe('The function count all from town', function(){
    it('The function should count all registration numbers from the same town', function(){
      assert.equal(countAllFromTown('CL 123456,CL 456789,CL 654321'),3);
    });

    it('The function should count all registration numbers from the same town', function(){
      assert.equal(countAllFromTown('CL 123456,CA 456789,CL 987654'),2);
    });

});
