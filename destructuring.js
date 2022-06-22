let arr = ["Numan", "Ahmar", "Imran"];

// * Array Destructuring
const [numan, ahmar, imran] = arr
console.log(numan, ahmar, imran)

const [,ahmar2] = arr
console.log(ahmar2)

const [, , imran2] = arr
console.log(imran2)

// * Object Destructuring * //
let obj = {
  goodName: "Numan Iftikhar",
  color: "Fair",
  age: 21,
  city: "Arifwala",
};

const { goodName, age } = obj;
console.log(goodName, age);
