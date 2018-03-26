  describe('The count all Paarl function',function(){
      it('The function should return the number of registration numbers from Paarl in the list', function(){
      assert.equal(countAllPaarl('CJ123456, CA654987 , CJ654987'), 2);
    });
          it('The function should return the number of registration numbers from Paarl in the list', function(){
            assert.equal(countAllPaarl('CA987321, CJ98746, CA654987'), 1);
          });

    });
