function deepFindAndCount(a,b){
  var count = 0;
  for(var i=0; i<a.length; i++){
    if(Array.isArray(a[i]))
      count += deepFindAndCount(a[i],b);
      else
        if(a[i]===b)
          count++;
  }
  
  return count;
}