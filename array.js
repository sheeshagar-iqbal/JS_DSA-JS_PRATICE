// find the  second largest in the array

// const arr = [10, 5, 20, 8, 20, 15];
// largest = -Infinity
// secondlargest = -Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secondlargest= largest
//         largest=arr[i]
//     }else if(arr[i]>secondlargest && largest != arr[i]){
//         secondlargest=arr[i]
//     }
// }
// console.log(secondlargest === -Infinity?'no second largest number':secondlargest);

// “I initialize largest and secondLargest with negative infinity. Then I iterate through the array once. If the current element is greater than largest, I move the current largest value to secondLargest and update largest. Otherwise, if the element is greater than secondLargest and different from largest, I update secondLargest. This also handles duplicate largest values.”






// move to all zero to the end

// const arr = [0, 1, 0, 3, 12];

// const newarr=[]
// count =0
// for(let i=0; i<arr.length ;i++){
//     if(arr[i]!==0){
//         newarr.push(arr[i])
//         count++
//     }
// }

// while(count<arr.length){
//     newarr[count]=0
//     count++
// }
// console.log(newarr);


// “I use an index pointer to track where the next non-zero element should be placed. First, I move all non-zero elements to the beginning of the array. Then I fill the remaining positions with zeros. This takes O(n) time and O(1) extra space.”

// two pointer apporach

// const arr = [0, 1, 0, 3, 12];

// let j=0;
// for (i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//     j++

//     }
// }
// console.log(arr);



// // remove the duplicate  value 
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const newarr = [ ...new Set(arr)]
// console.log(newarr);

// // sencond one

// const new_arr =[]
// for (let i=0; i<arr.length;i++){
//      if(!new_arr.includes(arr[i])){
//           new_arr.push(arr[i])
//      }
// }

// console.log(new_arr);

// “Can you remove duplicates without Set and without using includes()?”

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const obj ={}
// for(let item of arr){
//     if(obj[item]){
//         obj[item]=obj[item]+1
//     }else{
//         obj[item]=1
//     }
    
// }
//     console.log(obj);

// let newarr=[]
// for(let item in obj){
//     console.log(item);
//     newarr.push(Number(item))
    
// }
// console.log(newarr);



// sencond paroch
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const obj = {};
// const newArr = [];

// for (let item of arr) {
//     if (!obj[item]) {
//         obj[item] = true;
//         newArr.push(item);
//     }
// }

// console.log(newArr);


// Frequency Count

// const arr = [1, 2, 2, 3, 3, 3, 4, 4];

// const obj ={}
// for(let item of arr){
//     if(obj[item]){
//         obj[item]=obj[item]+1
//     }else{
//         obj[item]=1
//     }
    
// }
//     console.log(obj);


// shorter version 

// const obj = {};

// for (let item of arr) {
//     obj[item] = (obj[item] || 0) + 1;
// }

// console.log(obj);

// “I create an empty object to store the frequency of each element. I iterate through the array. If the element already exists in the object, I increment its count. Otherwise, I initialize its count to one.”



// Find Duplicates in an Array

// const arr = [1, 2, 3, 2, 4, 5, 3, 6, 2];
// const obj ={}
// for (let item of arr){
//     obj[item] =(obj[item] || 0)+1
// }
// console.log(obj);

// let newarr=[]
// for (let item in obj){
//     if(obj[item]>1){
//         newarr.push(Number(item))
//     }
    
// }
// console.log(newarr);

// “First, I create a frequency object to count how many times each element occurs. Then I iterate through the object and select the elements whose frequency is greater than one. I add each duplicate only once to the result array.”


// “Can you find duplicates without creating a frequency object?”  using map

// const arr = [1, 2, 3, 2, 4, 5, 3, 6, 2];

// const seen = new Set();
// const duplicates = new Set();

// for (let item of arr) {
//     if (seen.has(item)) {
//         duplicates.add(item);
//     } else {
//         seen.add(item);
//     }
// }

// console.log([...duplicates]);
// console.log(seen);
// console.log(duplicates);




// Reverse an Array

// const arr = [1, 2, 3, 4, 5];
// // first 
// console.log(arr.reverse());

// // sencond
// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];

//     left++;
//     right--;
// }
// console.log(arr);

// //  thrid
// let len = arr.length -1

// const res =[1,2,3,4,5]
// for(let i=0;i<arr.length/2;i++){
//     console.log(len ,i);
    
//     [res[i],res[len]]=[res[len],res[i]]
//     len=len-1
// }

// console.log(res);

// “I use two pointers. One starts at the beginning and the other at the end of the array. I swap the values and move both pointers toward the center until they meet.”


// Maximum and Minimum

// const arr = [12, 5, 8, 20, 3, 15];

// let max = arr[0]
// let min = arr[0]
//  for(let i=0 ; i<arr.length; i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }else if(min >arr[i] && )
//         min =arr[i]
//  }
//  console.log(min,max);
//  “I initialize both maximum and minimum with the first element. Then I traverse the array once. If the current element is greater than max, I update max. If it is smaller than min, I update min. So the time complexity is O(n) and the space complexity is O(1).”


// Question 8 — Two Sum 🔥
// const arr = [2, 7, 11, 15];
// const target = 9;

// for (let i=0 ;i<arr.length;i++){
//     for (let j=1 ; j<arr.length;j++){
//         if(arr[i]+arr[j]===target){
//             console.log(i,j);
//             break;
            
//         }
//     }
    
// }



// using map 




// let map = new Map()
// for (let i=0 ;i<arr.length;i++){
//     let needvalue = target- arr[i]
//     if(map.has(needvalue)){
//          console.log(map.get(needvalue),i);
//          break
//     }
// map.set(arr[i],i)
// }
//  console.log(map);
 


// Question 9 — Flatten Nested Array 🔥🔥\

// const arrs = [1, [2, 3], [4, [5, [6]]]];
// let farr =[]
// function flatten(arr){

//     for (let item of arr){
//         if(Array.isArray(item)){
//             flatten(item)
//         }else{
//             farr.push(item)
//         }
//     }
//     return farr
// }

// console.log(flatten(arrs));

// “I iterate through each element. If the element is an array, I recursively call the flatten function on that array. Otherwise, I push the element into the result array. The recursion continues until there are no nested arrays left.”


// Question 10 — Find Missing Number

// const arrs = [1, 2, 3, 5, 6];

// let n= n*(n+1)/2
// let actual =0
// for (let item of arrs){
//     actual=item+actual
// }
// const expected = n * (n + 1) / 2;
// console.log(expected-actual);

// “I calculate the expected sum of numbers from 1 to n using the formula n * (n + 1) / 2. Then I calculate the actual sum of the elements in the array. The difference between the expected sum and actual sum gives me the missing number.”


// Question 11 — Longest Consecutive 1s 🔥

// const arr = [1, 1, 0, 1, 1, 1, 0, 1];
// count=0
// l=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===1){
//         count++
//     }else{
//         count =0
//     }
//     if(count>l){
//         l=count
//     }
// }
// console.log(l);
// “I maintain two variables: count stores the current number of consecutive ones, and maxCount stores the maximum sequence found so far. Whenever I find a 1, I increment the count. When I find a 0, I reset the count to zero. After each element, I update the maximum count.”


// Question 12 — Sort Array Ascending / Descending

// const arr = [5, 2, 8, 1, 9, 3];

// console.log(arr.sort((a,b)=>a-b));
// console.log(arr.sort((a,b)=>b-a));

// “For numeric sorting, I use a comparator function. a - b sorts the values in ascending order, while b - a sorts them in descending order.”