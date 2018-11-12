var Vectors = {
  sum: function(a,b){
    if(!Array.isArray(a)||!Array.isArray(b))
      return false;
    for(var i=0; i<a.length; i++)
      if(typeof a[i]!='number')
        return false;
    for(var i=0; i<b.length; i++)
      if(typeof b[i]!='number')
        return false;
    var pom;
    var na = a.slice();
    var nb = b.slice();
    if(na.length<nb.length){
      pom=na;
      na=b;
      nb=pom;
    }
    var tab = na;
    for(var i=0; i<nb.length; i++)
      tab[i] += nb[i];
    return tab;
  },
  mulByScalar: function(a,b){
    if(!Array.isArray(a))
      return false;
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
