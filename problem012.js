function objectsDiff(a,b){
  var tab = [];
  for(var property in a){
    if(!(property in b))
      tab.push(property);
  }
  
  for(var property in b){
    if(!(property in a))
      tab.push(property);
  }
  return tab;
}