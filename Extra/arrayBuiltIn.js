// 1.Push => add elements at the end of the array
let array1 = [10, 20, 30, 40, 50];
array1.push(60);
console.log(array1);

// 2.Pop => remove elements at the end of the array
let array2 = [10, 20, 30, 40, 50, 60];
array1.pop();
console.log(array2);

// 3.Shift => remove elements from starting of the array
let array3 = [10, 20, 30, 40, 50, 60];
array3.shift();
console.log(array3);

// 4.Unshift => add elements from starting of the array
let array4 = [20, 30, 40, 50, 60];
array4.unshift(10);
console.log(array4);

// 5.Splice => remove element from specifed index in an array
let array5 = [10, 20, 30, 40, 50, 60];
array5.splice(1, 4);
console.log(array5); // [ 10, 60 ] // return [20, 30, 40, 50]

// 6.Slice => remove element from specified index in an array
let array6 = [10, 20, 30, 40, 50, 60];
array6.slice(1, 4);
console.log(array6); // [ 10, 20, 30, 40, 50, 60 ]
console.log(array6.slice(1, 4)); // return [ 20, 30, 40 ]

// 7. ForEach Loop => iterates over whole array
let array7 = [10, 20, 30, 40, 50, 60];
let result = array7.forEach((e) => {
  console.log(e);
});
console.log(result); //undefined

// 8. Map => iterates over whole array and creates new array
let array8 = [10, 20, 30, 40, 50];
let res = array8.map((e) => {
  console.log(e);
});
console.log(res) // [ undefined, undefined, undefined, undefined, undefined ]

// 9. Filter => creates a new array with elemenets that pass the condition
let array9 = [1, 2, 3, 4, 5]
array9.filter((value) => console.log(value % 2 == 0)) //Gives answer in boolean
let result1 = array9.filter((value) => value % 2 == 0);
console.log(result1); // [ 2, 4 ]

// 10.Reduce => Reduces an array to a single value using the accumulator
let array10 = [1, 2, 3, 4, 5]
let sum = array10.reduce((acc, num) => acc + num, 10);
console.log(sum);

// 11. Find => finds the first existing value according to the condition
let array11 = [10, 11, 12, 13, 14, 15]
const even = array11.find((num) => num % 2 == 0);
console.log(even);

// 12.Includes => finds the first existing value in an array
let array12 = [10, 11, 12, 13, 14, 15]
let includes = array12.includes(100)
console.log(includes); // false (gives answer in boolean)

// 13.Sort => Sorts the array in ascending order
let array13 = [13, 55, 87, 7, 22]
array13.sort((a, b) => a-b)
console.log(array13)

// 14.IndexOF => Finds the index of the first element found in the array which is asked to find and take the input of index from where to find
let array14 = [13, 55, 87, 7, 22]
let index = array14.indexOf(7, 0)
console.log(index)
