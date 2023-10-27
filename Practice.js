// Have the function SimpleAdding(num) add up all the numbers from 1 to num in javascript. 
// For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
// For the test cases, the parameter num will be any number from 1 to 1000 

// function SimpleAdding(num) {
//   // Initialize a variable to store the sum
//   let sum = 0;

//   // Use a for loop to add numbers from 1 to num
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }

//   return sum;
// }

// // Test the function
// console.log(SimpleAdding(4)); // Output should be 10

// function SimpleAdding(num) {
//     return (num * (num + 1)) / 2;
//   }
  
//   // Test the function
//   console.log(SimpleAdding(4)); // Output should be 10


function printStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      for (let j = 1; j <= i; j++) {
        pattern += '* ';
      }
      console.log(pattern);
    }
  }
  
  // Call the function with the number of rows you want
  printStarPattern(5);
  
  