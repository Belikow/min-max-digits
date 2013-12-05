/**
 * Created by vitalik on 03.12.13.
 */
var number =1482;
var a, b, max, min;
a= 0;
b = 0;
max = 0;
min = 10;
if(typeof (number) == "number")
{
    b = number % 10;
while(number>0)
{
    max = number % 10;
    if(b > max)
        max = b;
    number = (number - number % 10 ) / 10;
    if(b < min)
    min = b;
}

console.log("Max= " + max + " Min= " + min);
}
else
console.log("Ошибка");
