var Vectors = {
  sum: function(a,b){
    for(var i=0; i<a.length; i++)
      if(typeof a[i]!='number')
        return false;
    for(var i=0; i<b.length; i++)
      if(typeof b[i]!='number')
        return false;
    var pom;
    if(a.length<b.length){
      pom=a;
      a=b;
      b=pom;
    }
    var tab = a;
    for(var i=0; i<b.length; i++)
      tab[i] += b[i];
    return tab;
  },
  mulByScalar: function(a,b){
     for(var i=0; i<a.length; i++)
      if(typeof a[i]!='number')
        return false;
    if(typeof b!='number')
      return false;
    var tab = [];
    for(var i=0; i<a.length; i++)
      tab.push(a[i]*b);
    return tab;
  }
}
