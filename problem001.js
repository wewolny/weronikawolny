function triangleArea(a, b, c){
  if((a+b)>c&&(a+c)>b&&(b+c)>a){
    if(a>0&&b>0&&c>0)
    {
      var s = 0.0;
      var p;
      p=Number((a+b+c)/2);
      s=Number(Math.sqrt(p*(p-a)*(p-b)*(p-c)));
      return Number(s.toFixed(2));
    }
    else return -1;}
 else return -1; 
}
