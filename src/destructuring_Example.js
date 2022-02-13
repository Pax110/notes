const Alpha = ["a","b","c","d"]
const Beta = ["1","2","3","4"]

const newArray = [...Alpha, ...Beta]

const [a, b,...rest] = Alpha 

console.log("ALPHA is", a)
console.log("BETA is", b)
console.log("REST is", rest)
console.log("NEW ARRAY is", newArray)

//Example to destructure 
function sumAndMulty (a,b) {
    return [a*b, a+b]
}
const result = sumAndMulty(2,3)

console.log("result is", result) // result is [6,5]

//After Destructuring

const [sum, multiply] = sumAndMulty(4,5)

console.log("Sum is", sum)          // Sum is 20
console.log("Multiply is", multiply)// Multiply is 9 

//Also
//Works when you have a situation to handle
const [sum2, multiply2, devision = "can't devide"] = sumAndMulty(10,20)

console.log("Devision is", devision)

//NEW CONCEPT
//Destructuring  Object

const personOne = {
    name: "Pax",
    age: "26",
    address : {
        city: "Amdavad",
        state:"Gujarat"
    }
}
const personTwo = {
    firstName: "Pankil",
    age: "24",
    address : {
        city: "Calgary",
        state:"Alberta"
    }
}

// const {firstName ,age} = personTwo

// console.log("name is",firstName)
// console.log("age is",age)


//use case Object destructuring 

function printuser ({firstName, age}) {
    console.log(`Name is ${firstName}. Age is ${age}`)
}
printuser(personTwo)


function printAddress ({address}) {
    console.log("address is", address)
}
printAddress(personOne)


