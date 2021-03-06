describe('The function find items over 20', function(){
   it('It should return all items with a greater quantity than 20',function(){
     var itemList = [
   {name : 'apples', qty : 10},
   {name : 'pears', qty : 37},
   {name : 'bananas', qty : 27},
   {name : 'apples', qty : 3},
   ];
assert.deepEqual(findItemsOver20(itemList),2)

    });

    it('It should return all items with a greater quantity than 20',function(){
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 30},
    ];
 assert.deepEqual(findItemsOver20(itemList),3)

     });

     it('It should return all items with a greater quantity than 20',function(){
       var itemList = [
     {name : 'apples', qty : 10},
     {name : 'pears', qty : 17},
     {name : 'bananas', qty : 27},
     {name : 'apples', qty : 3},
     ];
  assert.deepEqual(findItemsOver20(itemList),1)

      });

});
