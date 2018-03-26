describe('The transport fee function', function(){
        it('The function will determine the price of transport based on what shift a person is working', function(){
          assert.equal(transportFee('Morning'),'R20')
        });
        it('The function will determine the price of transport based on what shift a person is working', function(){
          assert.equal(transportFee('Afternoon'),'R10')
        });
        it('The function will determine the price of transport based on what shift a person is working', function(){
          assert.equal(transportFee('Night'),'Free')
        });

});
