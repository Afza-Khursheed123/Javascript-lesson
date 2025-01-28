//creating common account info table
const AccountID = 231;
let name = 'Abdullah Khursheed';
let email= 'abdulla12345@gmail.com';
let password = '12345';
let city = 'Karachi'
let phone_n0 = '03323145678';
let accountstate ;//not defined
//to display data in separate lines use log
console.log(AccountID);
console.log(name);
console.log(email);
console.log(password);
console.log(city);
console.log(phone_n0);
console.log(accountstate);
//to display data in table fromat
console.table([AccountID,name,email,password,city,phone_n0,accountstate]); 