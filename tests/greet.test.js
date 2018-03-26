describe('The greet function', function(){
      it('The function should greet the person by their name' , function(){
          assert.equal(greet('Janine'),'Hello Janine');
        });

        it('The function should greet the person by their name' , function(){
            assert.equal(greet('Yegan'),'Hello Yegan');
          });
});
