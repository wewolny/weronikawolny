function stringRotate(a, b){
  var n;
  for( var i=0; i<b; ++i)
  { n = a.charAt(1);
    if(a.length>2)
    for (var j=2; j<a.length; ++j)
      {
        n = n + a.charAt(j);
      }
   n = n + a.charAt(0);
   a = n;
  }
  return a;
}
