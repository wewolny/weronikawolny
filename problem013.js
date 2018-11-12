function parametricSort(a,b){
  if(b==='asc')
    return a.sort();
  if(b==='desc'){
    a.sort();
    return a.reverse();
  }
  return false;
}