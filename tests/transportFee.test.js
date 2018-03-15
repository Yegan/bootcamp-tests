describe('transportFee', function(){
        it('Determine the price of transport based on work shift time slot', function(){
          assert.equal(transportFee('Morning'),'R20')
        });
        it('Determine the price of transport based on work shift time slot', function(){
          assert.equal(transportFee('Afternoon'),'R10')
        });
        it('Determine the price of transport based on work shift time slot', function(){
          assert.equal(transportFee('Night'),'Free')
        });

});
