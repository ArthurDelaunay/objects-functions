// 01 - Object
// const cat = {
//     firstName : "Garfield",
//     age : 3,
//     isCute : true,
// }

// console.log(cat)
// if (cat.isCute){
//     console.log("So cute !")
// }

// 02 - Combine
// const cat2 = {
//     firstName : "Lili",
//     age : 12,
//     isCute : true,
// }
// const cats = [cat, cat2]
// console.log(cats[cats.indexOf(cat)].age)
// console.log(cats[cats.indexOf(cat2)].isCute)

// 03 - Even
// const checkIfEven = (num) => {
//     if (num % 2 === 0) {
//         console.log("even")
//     }
//     else {
//         console.log("odd")
//     }
// }
// checkIfEven(13)
// checkIfEven(18712387)
// checkIfEven(122342)

// 04 - Compare
// const compare = (x, y) => {
//     if (x > y) {
//         console.log(`${x} is bigger`)
//     }
//     else if (x < y) {
//         console.log(`${y} is bigger`)
//     }
//     else {
//         console.log("both are the same")
//     }
// }
// compare(131, 78)
// compare(-123, 98.92)
// compare(1, 1)

// 05 - Add Up
// const addUp = (num) => {
//     let total = 0
//     for (i=1; i <= num; i += 1){
//         total += i
//     }
//     console.log(total)
// }
// addUp(12)

// 06 - Time
// const format = (num) => {
//     let secondes = num
//     let minutes = Math.floor(secondes /60)
//     secondes = secondes - minutes * 60
//     let hours = Math.floor(minutes / 60)
//     minutes = minutes - hours * 60
//     console.log(`${hours}:${minutes}:${secondes}`)
// }
// format(3700)

// 07 - Password generation
// const generatePassword = (num) => {
//     let result = ""
//     if (num > 6 && num < 15){
//         for(i=0; i < num; i += 1){
//             let random = Math.floor(Math.random() * 26) + 65
//             result = result + String.fromCharCode(random)
//         }
//     }
//     else {
//         result = "error"
//     }
//     console.log(result)
// }
// generatePassword(12)

// 08 - Let's play
// const launchDice = (numberOfDice) => {
//     let total = 0
//     for (i = 0; i < numberOfDice; i += 1){
//         let random = Math.ceil(Math.random() * 6)
//         total = total + random
//     }
//     return(total)
// }
// const player1 = launchDice(5)
// const player2 = launchDice(5)
// // console.log(`Le joueur 1 a fait un total de ${player1}`)
// // console.log(`Le joueur 2 a fait un total de ${player2}`)
// if (player1 > player2){
//     console.log(`Le joueur 1 a gagn?? avec un total de ${player1}`)
// }
// else if (player1 < player2){
//     console.log(`Le joueur 2 a gagn?? avec un total de ${player2}`)
// }
// else {
//     console.log(`Les 2 joueurs ont fait le m??me score de ${player1}`)
// }
