function maybe(a,b,c){
	var m = a(c);
    if(m)
	return b(c);
        else
          return c;
}