// let arr =[34,34,34,34]
// // let arr =[34,22,5,35,23]
// // console.log(arr.sort((a,b)=> b-a)[1]);
// let firstlargestnumber= -Infinity
// let secondlargestnumber= -Infinity

// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
//     if(arr[i]>firstlargestnumber){
//         secondlargestnumber=firstlargestnumber
//         firstlargestnumber=arr[i]
//     }else if(arr[i>secondlargestnumber && firstlargestnumber !== arr[i]]){
//             secondlargestnumber=arr[i]
//     }
// }

// console.log(secondlargestnumber === -Infinity ?'there is no second largest value':secondlargestnumber);



// const arr = [0, 1, 0, 3, 12];
// let j=0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]!==0){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//         j++
//     }
    
// }
// console.log(arr);


// let newarr=[]
// let count =0
// for(let i=0 ;i<arr.length;i++){
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


// const arr = [1, 2, 2, 3, 4, 4, 5];

// // const dup = [ ...new Set(arr)]
// // console.log(dup);

// // let result =[]

// // for(let i=0;i<arr.length;i++){
// //     if(!result.includes(arr[i])){
// //         result.push(arr[i])
// //     }
// // }

// // console.log(result);

// let obj={}

// for(let item of arr){
//     if(!obj[item]){
//         obj[item]=1
//     }else{
//         obj[item]=obj[item]+1
//     }
// }

// console.log(obj);
// let newarr=[]
// for(let item in obj){
//     newarr.push(Number(item))
// }
// console.log(newarr);


// const arr = [1, 2, 2, 3, 3, 3, 4, 4];

// const frequency = {};

// for (let item of arr) {
//     frequency[item] = (frequency[item] || 0) + 1;
// }

// console.log(frequency);



// const arr = [1, 2, 3, 2, 4, 5, 3, 6, 2];
// const feq ={}
// for(let item of arr){
//     feq[item]=(feq[item] || 0)+1
// }
// console.log(feq);

// let dup =[]
// for (let item in feq){
//     if(feq[item]>1){
//         dup.push(item)
//     }
// }
// console.log(dup);


// const arr = [1, 2, 3, 4, 5];
// // console.log(arr.reverse());

// let left =0
// let right =arr.length-1

// while(left<right){
//     [arr[left],arr[right]]=[arr[right],arr[left]]
//     left++
//     right--
// }
// console.log(arr);


// const arr = [12, 5, 8, 20, 3, 15];

// let min =arr[0]
// let max =arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//      if(arr[i]<min){
//         min=arr[i]
//      }
// }
// console.log(min,max);

// const arr = [2, 7, 11, 15];
// const target = 9;

// let map =new Map()

// for (let i=0;i<arr.length;i++){
//     let need =target-arr[i]
//     if(map.has(need)){
//         console.log(map.get(need),i);
//         break
//     }
//     map.set(arr[i],i)
// }


// for (let i=0;i<arr.length;i++){
//     for(let j=i ;j<arr.length;j++){
//         if(arr[i]+arr[j]===target){
//             console.log(i,j);
//             break
            
//         }
//     }
// }



// const arr = [1, [2, [3, 4]], 5];

// let newarr=[]
// function falatten(item){
//     for(let value of item){
//        if(Array.isArray(value)){
//             falatten(value)
//        }else{
//         newarr.push(value)
//        }

//     }
//     return newarr
// }

// console.log(falatten(arr));


// const arr = [1, 2, 3, 5, 6];

// let n = arr.length+1
// let ex= n*(n+1)/2
// let  acc=0
// for (let item of arr){
//     acc+=item
// }
// console.log(ex-acc);


const arr = [1, 1, 0, 1, 1, 1, 0, 1];
let count =0
let maxcount =0

for(let item of arr){
    if(item==1){
        count++
    }else{count=0}
    if(count>maxcount){
        maxcount=count
    }
}
console.log(maxcount);
