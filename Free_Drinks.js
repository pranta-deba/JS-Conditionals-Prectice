/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

 let cokeRate = 30;
 let maxBuy = 500;
 let payment = 54;

 if (payment >= maxBuy) {
    console.log(`You spent ${payment}. That's why you got a ${cokeRate} taka free coke.Then you have to give opinion in ${payment} taka`);
 }else{
    payment += 30;
    console.log(`Sorry, don't spend more than ${maxBuy} taka. So you won't get free coke. ${cokeRate} more for coke. Then you have to give opinion in ${payment} taka`);
 }