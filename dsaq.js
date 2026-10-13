// Find the second largest element in an array without sorting.


// const arr = [10, 5, 20, 8, 20, 15];
// const arr =[10, 10, 10]
// let largest =-Infinity
// let secondlargest = -Infinity

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secondlargest=largest
//         largest=arr[i]
//     }else if(arr[i]>secondlargest  && arr[i]!== largest){
//         secondlargest=arr[i]
//     }
// }
// console.log(secondlargest);






// Move All Zeros to End

// const arr = [0, 1, 0, 3, 12];

// const narr=[]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         narr[count]= arr[i]
//         count++
//     }
// }

// while(count<arr.length){
//     narr[count]= 0
//     count++
// }

// console.log(narr);


// function moveZeros(arr) {
//     let index = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             [arr[index], arr[i]] = [arr[i], arr[index]];
//             index++;
//         }
//     }

//     return arr;
// }

// console.log(moveZeros([0, 0, 0, 0, 12]));


// Remove Duplicates from Array


// const arr = [1, 2, 2, 3, 4, 4, 5];

// const unique = [...new Set(arr)];

// console.log(unique);
//   



// secont approach

// const uniquevalue= []
// for(let item of arr){
//     if(!uniquevalue.includes(item)){
//         uniquevalue.push(item)
//     }
    
// }
// console.log(uniquevalue);




// Find how many times each number occurs.

const arr = [1, 2, 2, 3, 1, 2];

let obj={}

for(let item of arr){
    if(obj[item]){
        obj[item]=obj[item]+1
    }
    else{
        obj[item] =1
    }
}

console.log(obj);
