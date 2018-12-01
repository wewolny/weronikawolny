function carry(a) {
    if (a.length == 0) return a;
      var args = [];
    return nest(a, 1, args);}



function nest(a, i, args) {
    return (x) => { args.push(x);
                    if( i == a.length) return a(...args);
                      return nest(a, i+1, args);
                      };}
