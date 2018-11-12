var Vectors = {
  sum: function(a,b){
    for(var i=0; i<a.length; i++)
    if(a.length!=3||b.length!=3)
      return false;
    var tab = [(a[0]+b[0]),(a[1]+b[1]),(a[2]+b[2])]
    return tab;
  },
  mulByScalar: function(a,b){
    if(a.length!=3||typeof b!='number')
      return false;
    var tab = [];
    for(var i=0; i<3; i++)
      tab.push(a[i]*b);
    return tab;
  }
}
