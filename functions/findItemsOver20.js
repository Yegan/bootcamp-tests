function findItemsOver20(items){
var list = [];
  for(var i=0;i<items.length;i++){;
  var item = items[i];
  if(item.qty>20){
    list.push(item);
  console.log(list)
  }
  }
  return list.length;
}
