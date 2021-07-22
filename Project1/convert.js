
// const input = document.getElementById("fname");
// const stringChecker = () => {
//     const userInput = input.value;
//     const splitInput = userInput.split("");
//     console.log(userInput);
//     // console.log(splitInput);
//     const filteredInput = splitInput.filter((str) => {
//         if ((str >= "A" && str <= "Z") || (str >= "a" && str <= "z")) {
//             return true;
//         } else {
//             return false;
//         }
//     })
//     const finalString = filteredInput.join("");
//     input.value = finalString;
// }
// input.oninput = stringChecker;


// const firstPara = "We the people of India";
// const secondPara = "We the of people India";
// const splitFirstPara = firstPara.split(" ");
// const splitSecondPara = secondPara.split(" ");
// console.log(splitFirstPara, splitSecondPara);

// const checkArrays = (arr1, arr2) => {
//     if (arr1.length === arr2.length) {

//         return arr1.every((val) =>
//             arr2.includes(val));
//     } else
//         return false;
// }
// console.log(checkArrays(splitFirstPara, splitSecondPara))


const firstPara = "We the people of India";
const secondPara = "W the of India";
const splitFirstPara = firstPara.split(" ");
const splitSecondPara = secondPara.split(" ");
// console.log(splitSecondPara[0])
let c = splitFirstPara.indexOf(splitSecondPara[0]);

console.log(c)



















