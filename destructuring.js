let arr = ["Numan", "Ahmar", "Imran"]

// * Array Destructuring 
// * const [numan, ahmar, imran] = arr
// * console.log(numan, ahmar, imran)

// const [,ahmar] = arr
// console.log(ahmar)

// const [, , imran] = arr
// console.log(imran)


// * Object Destructuring 
let obj = {
    name: "Numan",
    color: "Fair",
    age: 21,
    city: "Arifwala",
}

const { name, age } = obj;
console.log(name, age)