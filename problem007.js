﻿findMax = function(){
  var max = arguments[0];
  for( var i in arguments)
    if(arguments[i]>max)
      max=arguments[i];
  
  return max;
}