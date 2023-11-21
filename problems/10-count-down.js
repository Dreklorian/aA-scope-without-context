/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

***********************************************************************/
function countDownTimer(num) {
  let count = num;
  if (count > 0) {
    return function() {
      count -= 1;
      //console.log(count);
      if (count === 0) {
        return "Happy New Year!";}
      // } else {
      //   return count;
      // }
    }
  }
  return "Happy New Year!"
  //return () => (count > 0) ? count-- : console.log("Happy New Year");
  //return (count > 0) ? () => count -= 1 :"Happy New Year!";
  // if (count <= 0) {
  //   return 'Happy New Year!';
  // }
  // return function() {
  //   count--;

  // }
}




//Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

//Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

//Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

//Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = countDownTimer;
} catch (e) {
  return null;
}
