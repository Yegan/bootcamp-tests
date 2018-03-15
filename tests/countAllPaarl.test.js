  describe('countAllPaarl',function(){
      it('Count all registration numbers for Paarl', function(){
      assert.equal(countAllPaarl('CJ123456'), true);
    });
          it('Count all registration not from Paarl', function(){
            assert.equal(countAllPaarl('CA123456'), false);
          });

    });
