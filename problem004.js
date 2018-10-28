function getTotalNumberOfNewYaersEveSundays(a, b){
  var l=0;
  var d = new Date(2006,0,1);
  for( var i = a; i<= b; ++i)
    {
      d = new Date (i,0,1);
      if((new Date(i,0,1)).getDay()===0)
        ++l;
    }
  return l;
}