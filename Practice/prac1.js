const obj = [
    { prod1: 'Com', price: 200 },
    { prod2: 'Mob', price: 500 },
    { prod3: 'Pen', price: 100 },
]
// const addObj = obj.map((val) => val.price);
// console.log(addObj)
// const k = addObj.reduce((a,v) => a+v );
// console.log(k)

// const addRed = obj.reduce((acc,value)=> {
//     console.log(value);
//     return acc += value.price},0);
// console.log(addRed);

// const price = obj.filter(val => {
//     if (val.price > 400){
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// // console.log(price)


// const l = obj.length;
// console.log(l)

// const odd = obj.filter((val,index) =>{
// if ((index + 1) % 2 === 0){
//     return false;
// } else{
//     return true;
// }

// })
// console.log(odd)



// const obj1 = [
//     {prod1 : 'Com', price : 200},
//     {prod2 : 'Mob', price : 500},
//     {prod3 : 'Pen', price : 100}
// ]

// const sum = obj1.reduce((acc,val) => {
//     return acc += parseFloat(val.price.toFixed(2));
// },0)
// console.log({ sum: sum })

// Input is an array of numbers, return the sum of all of the positives ones. If the array is empty or there aren't any positive numbers return 0.

// const input = [ -1, -4, 12, 0, 3, -29, 150];


// const pos = input.filter(num => {
//     if (num > 0){
//         return true;
//     } else{
//         return false;
//     }})
// const add1 = pos.reduce((acc,number) =>{
//         return acc+= number
//     },0)
//     console.log (add1);

// const obj1 = {
//     "a" : 10,
//     "b" : 20,
//     "c" : 30
// }
// const newArr = Object.values(obj1);
// console.log(newArr);

// const pro1 = new Promise((resolve,reject) => {
//     const arr1 = [
//         {label: "Shirt", price: 100},
//         {label: "Pant", price: 200},
//         {label: "Tie", price: 300}
//     ];
//     reject(arr1)
// })

// const resA = (ful1)=>{
//     const sum = ful1.reduce((acc,element)=>{
//         acc = acc + element.price;
//         return acc;
//     },0)
//     console.log("First then: ",sum)
//     return sum;
// }

// const rejA = (err)=>{
//     console.error(err);
// }

// pro1
//     .then(resA)
//     .then((sum)=>{
//         console.log("Second then: ",sum);
//         throw new Error("catch test");
//     },rejA)
//     // .catch(rejA)



// const promiseObj = new Promise((resolve,reject) =>{
//     const arr = [1,2,3];
//     // resolve(arr);
//      reject ("Error");
// });
// promiseObj
// .then((anyName)=>{
//     console.log(anyName);
// })
// .catch((anyName1)=>{
//     console.log(anyName1)
// })



const arr1 = [
    { label: "Shirt", price: 100 },
    { label: "Pant", price: 200 },
    { label: "Tie", price: 300 }
];

const promisePractice = new Promise((resolve, reject) => {
    const sum = arr1.reduce((result, data) => {

        return result = result + data.price;
    }, 0);
    console.log(sum);
    resolve(sum);

    //reject("Error");
});

const addNewPromise = new Promise((resolve, reject) => {
    const multiply = arr1.reduce((result, data) => {
        result = result * data.price;
        return result
    }, 1)

    resolve(multiply);
    console.log(multiply);
    //reject("2nd Error");
});

promisePractice
    .then((addNewPromise) => {
        console.log(addNewPromise)
        return addNewPromise;
    })

    .catch((canBeAnyValue2) => {
        console.log(canBeAnyValue2)
    })