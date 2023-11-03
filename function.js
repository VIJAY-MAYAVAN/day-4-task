
//Anonymous function 
//a. print odd numbers in an array
let arr=[1,2,3,4,5,6,7,8,9]
let num = arr[i]
let odd = function () {
  let odd= arr.filter(num => num %2 ==1)
  console.log(odd)
}
odd()

//b. convert all the strings to little caps in a string array
let str = function () {
  let arr = "i dont't know anything"
  let caps = arr.toLowerCase().replace().toUpperCase()
  console.log(caps)
}
str()

//c. sum of all numbers in an array

let vijay = function () {
    
  let arr = [1, 2, 3, 4, 5]
  let sum = arr.reduce(function(val1, val2){
      return val1 + val2
  })
  console.log(sum)
}
vijay()

//d. Return all the prime numbers in an array

let prime = function (arr) {
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return n > 1  
      }
    }
  })
}
  
console.log(prime([1,3,5,7,9]))

//e. Return all the palindrome in an array

let isPalindrome = function () {
  let array = ['racer', 'level', 'mango', 'malayalam','madam']
  let arr = array.filter(function (c, d) {
    let palindrome = c.split('').reverse().join('')
    if (c == palindrome) {
      console.log(array[d])
    }
  })
}
isPalindrome()

//f. Return median of two sorted arrays of the same size

let arr1 = [10,20,30,40,50]
let arr2 = [60,70,80,90,100]
let median = function(a, b) {

  let c = [...a, ...b].sort((a, b) => a - b)

  const half = c.length / 2 | 0
  
if (c.length % 2) {
  return c[half];
} else {
  
  return (c[half] + c[half - 1]) / 2
}
}
console.log(median(arr1, arr2)) 

//g. Remove duplicates from an array

let Duplicates = function () {
  
  const D = [1, 1, 2, 3, 4, 5, 5]
  let arr = []
  const arr1 = [...D].sort() 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i + 1] === arr1[i]) {
      arr.push(arr1[i])
    }
  }
  console.log(arr) 
}
Duplicates()

//h. Rotate array by k times

let rotateArray =function(A, K) {
  if (A.length === K || K === 0) {
      return A
  }
  K = K % A.length
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
rotateArray([1,2,3,4,5],3)

//IIFE Function
//a. print odd numbers in an array

let a=[1,2,3,4,5,6,7,8,9]

(function ()  {

  let odd= a.filter(num => num %2 ==1)
return odd

  })()

//b.convert all the strings to little caps in a string array

(function (str) {
  str = str.toLowerCase().split(' ')
  for (let i = 0; i < str.length; i++){
    str[i] = str[i].toUpperCase() 
  }
  console.log(str.join(' '))
  })("i don't know anything")

//c. sum of all numbers in an array

  (function () {
    let sum = [1, 2, 3, 4].reduce(add,5)
    function add(sum, a) {
      return sum + a
    }
    console.log(sum)
  })()
  
//d. Return all the prime numbers in an array

(function (){
  var prime = [1,3,5,7,9]
  
  prime= prime.filter(function(number) {
    for (let i = 2; i <= prime.length; i++) {
      if (number % i === 0) return false
    }
    return true
  })
  
  console.log(prime)
  })()

  //e. Return all the palindromes in an array

  ( function () {
    let arr = ['racer', 'level', 'mango', 'malayalam','madam']
     let arr1 = arr.filter(function (c, d) {
      let palindrome = c.split('').reverse().join('')
      if (c == palindrome) {
        console.log(arr[d])
      }
    })
  })()

  //f. Return median of two sorted arrays of same size.

  ( function() {
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2)
    
      const half = c.length / 2 | 0
      
    if (c.length % 2) {
    console.log(c[half])
    } else {
      
    console.log((c[half] + c[half - 1]) / 2)
    }
    
    })()

//g. Remove duplicates from an array

(function () {
  
  let arr = [1, 2, 3, 2, 4, 5, 5]
  
  let duplicates = arr.filter((item, index) => index !== arr.indexOf(item))
  
  console.log(duplicates)
})()

//h. Rotate an array by k times

(function(A, K) {
  if (A.length === K || K === 0) {
      return A
  }
  K = K % A.length
  for (let i = 0; i < K; i++) {
      A.push(A.shift())
  }
console.log(A)
})([1,2,3,4,5],3)













