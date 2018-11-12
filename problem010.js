function deepCopy(a){
  var tab = [];
  var copy;
  for(var i=0; i<a.length; ++i){
   if(Array.isArray(a[i]))
     copy = deepCopy(a[i]);
     else
       copy = a[i];
   tab.push(copy); 
  }
  
  return tab;
}
