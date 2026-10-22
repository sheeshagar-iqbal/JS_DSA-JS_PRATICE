// // Question 13 — Palindrome String

// function isPalindrome(str){
//      str = String(str);
//     let left =0
//     let right =str.length-1

//     while(left<right){
//         if(str[left]!==str[right]){
//             return false
//         }
//         right--
//         left++
//     }
        
//     return true
// }
// console.log(isPalindrome('madam'));
// console.log(isPalindrome('fish'));
// console.log(isPalindrome(123));
// console.log(isPalindrome(121));

// isPalindrome('madam') ?console.log('polindrome'):console.log('not polindrome');


// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }


// 15. Reverse String

// const str ='hello'

// res=''
// for (let index = 0; index < str.length; index++) {
//     res=str[index] +res
    
// }

// console.log(res);


// 16. Reverse Words in Sentence

// srev="hello world javascript"

// console.log(srev.split(' ').reverse().join(' '));



// anagram
// function isAnagram(str1,str2){
//     if(str1.length!==str2.length){
//         return false
//     }

//     let obj={}
//     for(let item of str1){
//         obj[item]= (obj[item] || 0)+1
//     }

//     for(let item of str1){
//         if(!obj[item]){
//             return false
//         }
//         obj[item]--
//     }
//     return true
// }

// console.log(isAnagram("listen", "silent"));



// Easy alternative
// function isAnagram(a, b) {
//     return a.split("").sort().join("") ===
//         b.split("").sort().join("");
// }



// 18. First Non-Repeating Character 🔥

// function firstNonRepeating(str){
//     let obj ={}
//     for(let item of str){
//         obj[item]=(obj[item] || 0)+1
//     }
//   console.log(obj);
  
//     for(let item in obj){
//         if(obj[item] ===1){
//             return item
//         }
//     }

//     return null
// }

// console.log(firstNonRepeating("aabbcde"));


// 19. Remove Duplicates from String


// function removeDuplicates(str){
//     const seen =new Set()
//     let dup = ''

//     for(let item of str){
//         if(!seen.has(item)){
//             seen.add(item)
//             dup+=item
//         }
//     }
//     return dup
// }

// console.log(removeDuplicates("programming"));



// 20. Count Vowels

// function countVowels(str){
//     let re=''
//     for(let item of str){
//         if('auioe'.includes(item)){
//             re+=item
//         }
//     }
//     return re.length
// }

// console.log(countVowels("Hello World"));


// 21. Character Frequency Count

// function charFrequency(str) {
//     const frequency = {};

//     for (let char of str) {
//         frequency[char] = (frequency[char] || 0) + 1;
//     }

//     return frequency;
// }

// console.log(charFrequency("hello"));