function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let i=0; i < array.length; i++){
    for(let j=i +1; j < array.length; j++){
      if (array[i] + array[j]===target)
      return true
    }
  }
    return false
  
  
}

/* 
  Write the Big O time complexity of your function here
  o(n*2)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

    define a function, hasTargetSum, that receives two arguments, an array and interger,
  the function should return true if the sum of two numbers in the array equals the interger
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
