describe('isFromBellville' , function(){

    it('should return true if this a Bellville Registration number' , function(){
        assert.equal(true, isFromBellville("CY 123 543"));
    });

    it('should return false if this not a Bellville Registration number' , function(){
        assert.equal(false, isFromBellville("CL 54354"));
    });

});
