//Arrow Function
//a. Print an odd number in an array

let arr = [1,2,3,4,5,6,7,8,9]
const odd = arr.filter((v) => v % 2 === 1)
console.log(odd)

//b. Convert all the strings to little caps in a string array

const arr = ['may i come in']

const caps = arr.map(element => {
  return element.toUpperCase()
})
console.log(caps)

//c. sum of all numbers in an array

let arr = [10,20,30]
const sum = arr.reduce((a,b)=>a+b,0){
    return (a+b)
}
console.log(sum)

//d. return all the prime numbers in an array

let arr =[1,2,3,4,5,6,7,8,9]
const prime = arr.reduce((a,b)=>a%2<=1){
    return(a,b)
}
console.log(prime)

//e. return all the palindromes in an array

const words = ['mango','civc','core','madam','level']
const Palindromes = (words) => { return words.filter((word) => { word.split("").reverse().join("") === word
  })
}

console.log(Palindromes)