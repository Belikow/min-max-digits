/**
 * Created by vitalik on 03.12.13.
 */
var l =1482;
var a, b, c;
a= 0;
b=0;
c=0;
d=10;
while(l>0)
{
    b=l%10;
    if(b>c)
    {c=b;}
    l=(l-l%10)/10;
    if(b<d)
    d=b;
}
console.log("Max= "+c+" Min= "+ d);
