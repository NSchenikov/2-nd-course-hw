window.addEventListener("DOMContentLoaded", (event) => {

//1 task
// for(let i = 0; i <= 1; i++) {
//     console.log('Привет');
// }

//2 task
// let i = 1;
// while(i <= 5) {
//     console.log(i);
//     i++;
// }

//3 task
// let i = 7;
// do {
//     console.log(i);
//     i++;
// } while (i <= 22);

//4 task
// let obj = {
//     Kolya: 200,
//     Vasya: 300,
//     Petya: 400
// };
// for (let property in obj) {
//     console.log(`${property} - salary is ${obj[property]} dollars`);
// }

// 5 task
let n = 1000,
num = 0;
while(n >= 50) {
    n /= 2;
    num++;
}
console.log(`final number is ${n} and loop has made ${num} iterations`);

//6 task
// let firstFriday = 3,
// daysOfMonth = 31;
// for(let i = 0; i <= daysOfMonth; i += 7) {
//     console.log(`Сегодня пятница ${firstFriday}-е число. Необходимо подготовить отчет`);
//     firstFriday += 7;
// }



});