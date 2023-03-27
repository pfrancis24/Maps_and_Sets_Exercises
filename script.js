// // Quick Question #1
// // What does the following code return?
// // new Set([1,1,2,2,3,4])

// {1,2,3,4}
// // the Set only keeps unique inputs

// // Quick Question #2
// // What does the following code return?
// // [...new Set("referee")].join("")

// 'ref'
// // the Set only keeps unique inputs

// // Quick Question #3
// // let m = new Map();
// // m.set([1, 2, 3], true);
// // m.set([1, 2, 3], false);

// {Array(3) => true, Array(3) => false}
// // both are entered and since they are arrays (referencing presence rather than strict equality)

// // hasDuplicate:
// // Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate:

// function hasDuplicate(arr) {
//   return [...new Set(arr)].size !== arr.length;
// }
// // by comparing set size against the original arr length we can see if there are duplicates.

// // vowelCount:
// // Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// function vowelCount(string) {
//   const lwrString = string.toLowerCase();
//   const vowelHere = (char) => 'aeiou'.includes(char);
//   const vowelMap = new Map();
//   // loop over char of string
//   for (const char of lwrString) {
//     if (vowelHere(char)) {
//       // if char of string with vowelHere returns true, add it to vowelMap, OR add another counter to already existing
//       if (vowelMap.has(char)) {
//         vowelMap.set(char, vowelMap.get(char) + 1);
//       } else {
//         vowelMap.set(char, 1);
//       }
//     }
//   }
//   return vowelMap;
// }
