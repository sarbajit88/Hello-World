


// change the strings to array using split (" ")
// check the length od two arrays 
// if the two arrays are equal , use for loop to access every index of 1st string with the index of 2nd string

// const firstPara = "We the people of India";
// const secondPara = "We the people of India";
// const splitFirstPara = firstPara.split(" ");
// const splitSecondPara = secondPara.split(" ");

// const checkArrays = (arr1, arr2) => {
//     if (arr1.length !== arr2.length)
//         return console.log("Both strings lengths are not matching");
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return console.log("Both strings characters are not matching");
//         }
//     }
//     console.log("Both strings are matching");
// }
// checkArrays(splitFirstPara, splitSecondPara);


// const firstPara = "We people of India";
// const secondPara = "We the people of India";
// const splitFirstPara = firstPara.split(" ");
// const splitSecondPara = secondPara.split(" ");

// const checkArrays = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return console.log("Both strings lengths are not matching");
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         for (let n = 0; n < arr2.length; n++) {
//             if (arr1.indexOf(arr2[n]) === -1) {
//                 return console.log("Both strings words are not matching");
//             }
//         }
//     }
//     console.log("Both strings are matching");
// }
// checkArrays(splitFirstPara, splitSecondPara);


// const firstPara = "We the of people India";
// const secondPara = "We the of people India";
// const splitFirstPara = firstPara.split(" ");
// const splitSecondPara = secondPara.split(" ");

// const checkArrays = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return console.log("Both strings lengths are not matching");
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         for (let n = 0; n < arr2.length; n++) {
//             if (arr1.includes(arr2[n]) === true) {
//                 continue;
//             } else {
//                 return console.log("Both strings words are not matching");
//             }
//         }
//     }
//     console.log("Both strings are matching");
// }
// checkArrays(splitFirstPara, splitSecondPara);


//****** FACTORIAL

// const input = 5;
// let acc = 1
// for( let i = input; i> 0 ;i-- ){
//     acc = i * acc;
// }
// console.log(acc);

const factorial = (number) => {
    let acc = 1
    for (let i = number; i > 0; i--) {
        acc = i * acc;
    }
    console.log(acc);
}
factorial(5);