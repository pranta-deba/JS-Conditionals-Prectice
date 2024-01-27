/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let me = 91;
let friend = 40;

if (me >= 80) {
  if (friend >= 80) {
    console.log("go for a lunch");
  } else if (friend <= 79 && friend >= 60) {
    console.log("good luck next time");
  } else if (friend <= 59 && friend >= 40) {
    console.log("friend's message unseen");
  } else if (friend < 40) {
    console.log("blocked");
  }
} else {
  console.log("go to home and sleep and act");
}
