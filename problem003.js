function isLeapYear(a){		 
    if(a%4===0&&a%100!=0)
      return true;
    if(a%400===0)
      return true;
  return false;
      }
