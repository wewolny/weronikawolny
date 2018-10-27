divisible = function(){
  
  for( var i in arguments)
    if(arguments[0]%arguments[i]!=0)
      return false;
  
  return true;
}