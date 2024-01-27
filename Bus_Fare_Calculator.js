/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 55;
let ticket = 200;

if (age < 10) {
    console.log("You are free");
}else if (age > 10 && age <= 30) {
    console.log("student , your ticket rate is : " ,(ticket / 100) * 50);
}else if (age > 31 && age <= 60) {
    console.log("he/she , your ticket rate is : ", ticket);
}else{
    console.log("murubbi , your ticket rate is : " ,(ticket / 100) * 15);
}