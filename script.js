// let text1 = 1 // global

// // local
// function a (a ) { 
//     // block
//     if(a) {
//         return a
//     }
//  return a
// }

const taskFour = 4
console.log(`Task ${taskFour}`)

function plus(num1, num2) {
    let result = num1 + num2
    console.log(result)
}
function minus(num1, num2) {
    let result = num1 - num2
    console.log(result)
}
function multiply(num1, num2) {
    let result = num1 * num2
    console.log(result)
}
function divide(num1, num2) {
    let result = num1 / num2
    console.log(result)
}
minus(76, 58)
plus(5,2)
multiply(90,90)
divide(10000, 5)

const taskFive = 5
console.log(`Task ${taskFive}`)

function func1(n) {
    for(let i = 1; i >= n; i++) {
        console.log(n)
    }
}

func1(5)