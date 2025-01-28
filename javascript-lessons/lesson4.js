//data type of value to be compared should be same
console.log(2>1);
console.log(2==1);
console.log(2<1);
//for null values the compiler will conert it into number 1
//bad practice
console.log(null<0);
console.log(null>=0);
console.log(null==0);

//strict check 
console.log(2===2);
console.log('2'===2); //string is being compared to number
