let arr = [5,0,6,9,0,9,20]
let obj = {}
for (let index = 0; index < arr.length; index++) {
   if (obj[arr[index]]) {
       obj[arr[index]] = obj[arr[index]] +1
   }else{
    obj[arr[index]] = 1
   }
    
}
for(let key in obj){
    if (obj[key] > 1) {
        console.log(key)
    }
}