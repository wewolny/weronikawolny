function deepCopy(a){
  var tab = [];
  for(var i=0; i<a.length; ++i){
   tab.push(a[i]); 
  }
  
  return tab;
}