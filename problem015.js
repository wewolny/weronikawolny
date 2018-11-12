stack =[];
var Stack = {
  push: function(a,b){
    if(isNaN(b))
      b=1;
    for(var i=0; i<b-1; i++)
      stack.push(null);
    stack.push(a);
    return stack;
    
  },
  pop: function(a){
    if(isNaN(a))
      a=1;
    var l;
    for(var i=0; i<a; i++)
      l=stack.pop(a);
    return l;
  }
}