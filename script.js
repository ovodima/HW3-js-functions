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
    for(let i = 1; i <= n; i++) {
        console.log(i)
    }
}
func1(5)

const taskSix = 6
console.log(`Task ${taskSix}`)

function func2(n) {
    for(let i = 5; i >= n; i--) {
        console.log(i)
    }
}
func2(1)

const taskSeven = 7
console.log(`Task ${taskSeven}`)

function pow(number, pow) {
    let result = Math.pow(number, pow)
    console.log(result)
}
pow(7,2)

const taskEight = 8
console.log(`Task ${taskEight}`)

function isBigger(num1, num2) {
    if(num1 > num2) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isBigger(5, -1)

const taskNine = 9
console.log(`Task ${taskNine}`)

function isSmaller(num1, num2) {
    if(num1 < num2) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isSmaller(5,-1)