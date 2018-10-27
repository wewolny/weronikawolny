function stringRotate(a, b){
  for( var i=0; i<b; ++i){
    var pom = a.charAt(0);
    var p; 
    a = a.replace(a.charAt(0), '$');
    for( var j=1;j<a.length; ++j)
      {
        p = a.charAt(j);
        a = a.replace (a.charAt(j), '$');
        a = a.replace('$', p);
      }
    a = a.replace('$', pom);
  }
  return a;
}