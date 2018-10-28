function strangeSum(a,b){
if(typeof a ==='number' && typeof b ==='number' && a%1===0 && b%1===0)
{
    if(a===b)
        return 3*(a+b);
    else
        return a+b;}
else
return null;
}
