describe('countAllFromTown', function(){
    it('Count all registartion from a specific town', function(){
      assert.equal(countAllFromTown('CL 123456,CL 456789'),2);
    });

    it('Count all registartion from a specific town', function(){
      assert.equal(countAllFromTown('CL 123456,CL 456789,CL 987654'),3);
    });

});
