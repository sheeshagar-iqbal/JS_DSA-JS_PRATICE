// Find Second Largest Element

// let arr =[10,5,15,4,12]
// arr = [15]

// arr=[5, 5]
// arr=[10, 10, 5]
// arr=[-10, -20, -5]
// let b= arr.sort()


// console.log(arr.sort((a,b)=>b-a));
// console.log(b[1]);

// other way to sorting

// let largest =-Infinity
// let secontlargest = -Infinity

// for (let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secontlargest=largest
//         largest=arr[i]
//     }
//     else if(arr[i]>secontlargest && arr[i] !== largest){
//         secontlargest=arr[i]
//     }
// }

// console.log(`first largest number ${largest}`);
// console.log(`secont largest number ${secontlargest}`);



// 2. Move All Zeros to End

// let arr =[0, 1, 0, 3, 12]
// let index=0
// let nwarr =[]
// for (let i=0; i<arr.length; i++){
//     if(arr[i]!==0){
//         nwarr[index]=arr[i]
//         index+=1
//     }
// }

// while(arr.length>nwarr.length){
//      nwarr[index]=0
//         index+=1
// }

// console.log(nwarr);




// 3. Remove Duplicates from Array

// let arr =[1,2,2,3,3,4,4,5]

// with set 

// console.log( new Set(arr));
// let setarr = [...new Set(arr)]
// console.log(setarr);
  
// without set 

// let setarr=[]

// for (let i=0;i<arr.length;i++){
//     if(!setarr.includes(arr[i])){
//         setarr.push(arr[i])
//     }
// }
// console.log(setarr);


// 4. Frequency Count

// let arr= [1,2,2,3,3,5,3,4,4,5]

// let obj={}
// for (let item of arr){
//     if(obj[item]){
//         obj[item]=obj[item]+1
//     }else{
//         obj[item]=1

//     }
// }


// for (let item of arr){
//     obj[item]=(obj[item] || 0) +1
// }

// console.log(obj);

// 5. Find Duplicate Elements

// let arr= [1,2,2,3,3,5,3,4,4,5]

// let seen = new Set()
// let duplicate = new Set()
// for (let item of arr){
//     if(seen.has(item)){
//         duplicate.add(item)
//     }
//     else{
//        seen.add(item)
//     }
// }
// console.log([...duplicate]);





// 6. Reverse an Array

// let arr=[1,2,3,4,5]
// let revarr =[]
// console.log(arr.reverse());


// for (let i=arr.length-1 ;i>=0;i--){
//     revarr.push(arr[i])
// }

// console.log(revarr);



// 7. Find Maximum and Minimum


// let arr = [10, 5, 20, 3, 15];
// let max =arr[0]
// let min =arr[0]
// for (var item of arr){
//       if (item>max){
//         max=item
//       }
//       if(item<min && item!==max){
//         min=item
//       }
// }

// console.log(min,max);




// 8. Two Sum Problem Target sum


let arr = [2, 7, 11, 15];
let target = 9;

let map = new Map();

for (let i = 0; i < arr.length; i++) {

    let required = target - arr[i];

    if (map.has(required)) {
        console.log([map.get(required), i]);
        break;
    }

    map.set(arr[i], i);
}
