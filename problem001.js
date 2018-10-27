function triangleArea(a, b, c){
  if(a+b>c&&a+c>b&&c+b>a){ 
  if(a>0&&b>0&&c>0)
    {
      var s;
      var p;
      p=(a+b+c)/2;
      s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
      return Math.round(s,2);
    }
    else return -1;}
  else return -1;
}