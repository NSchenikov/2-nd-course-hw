// "use strict";

// window.addEventListener("DOMContentLoaded", (event) => {

//task 1
// let mult = (arr) => {
//     let m = arr.reduce((a, b) => a * b);
//     console.log(m);
// };

// let sum = (arr) => {
//     let m = arr.reduce((a, b) => a + b);
//     console.log(m);
// };

// let getResult = (arr, callback) => {
//     callback(arr);
// };

// getResult ([3, 4, 1, 9], mult);
// getResult ([3, 4, 1, 9], sum);

//task 2
// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

// function getSortedArrayObj(arr) {

//     function compareFunction(a, b) { 
//         return a.age - b.age;
//     }

//     for (let i = 0; i < arr.length; i++) {
// 	  for (let j = i; j < arr.length; j++) {
        
// 	    const condition = compareFunction ? compareFunction(arr[i], arr[j]) > 0 : arr[i].toString() > arr[j].toString();
        
// 	    if (condition) {
// 				let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr);
//     return arr;
// }

// getSortedArrayObj(users);

//task 3
// const array1 = [1, '4', 9, 'two'];
// const array2 = [1, '4', false, 9, 'two'];

// const reversArr = (arr) => {
//     let reversed = arr.reverse();
//     console.log(reversed);
//     return reversed;
// };

// const toNumberArr = (arr) => {
//     arr = arr.map(str => {return +str}).filter(function (value) {
//         return !Number.isNaN(value);
//     });

//     console.log(arr);
//     return arr;
// };

// const each = (arr, callback) => {
//     callback(arr);
// };

// each(array1, reversArr);
// each(array2, toNumberArr);

//task 4
// const data = () => {
//     let currentDate = new Date();
//     console.log(currentDate);
// };

// const timer = () => {
// 	const interval = setInterval(data, 3000);

// 	setTimeout(() => {
//     clearInterval(interval);
//     console.log('30 секунд прошло');
//   }, 30000);
// };

// timer();

//task 5
// function calling() {
//     console.log('Звоню!');
// }

// function beeps(callback) {
//     setTimeout(() => {
//         console.log('Идут гудки...');
//         callback();
//     }, 1000);
// }

// function talk() {
//     console.log('Разговор');
// }

// calling();
// beeps(talk);










let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function shuffle(arr) {
    // let currentIn = arr.length,  
    // randomIn;
  
    // while (currentIn != 0) {
    //   randomIn = Math.floor(Math.random() * currentIn);
    //   currentIn--;
    //   [arr[currentIn], arr[randomIn]] = [arr[randomIn], arr[currentIn]];
    // }

    arr = arr.sort(() => Math.random() - 0.5);

    let str = arr.join(', ');
    
    alert(`Дана последовательность слов: ${str}`);

    arr = arr.map(element => {
        return element.toLowerCase();
    });

    let first = prompt('Чему равнялся первый элемент массива?').toLowerCase();
    let last = prompt('Чему равнялся последний элемент массива?').toLowerCase();

    if(first === arr[0] && last === arr[arr.length - 1]) {
        alert('Поздравляем! Вы угадали оба слова!');
    } else if(first === arr[0] || last === arr[arr.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('К сожалению, вы ответили неверно');
    }
  }

//   shuffle(arr);
  


//-----

function monthNum() {
    let num = Number(prompt("Введите номер месяца"));
    let season;

    if(isNaN(num) || num <= 0 || num > 12) {
        alert("Указанное значение не может обозначать номер месяца");
        return "Указанное значение не может обозначать номер месяца";
    } else {
        switch(num) {
            case 12:
            case 1:
            case 2:
               season = 'Зима'; 
               break;
            case 3:
            case 4:
            case 5:
                season = 'Весна'; 
                break;
            case 6:
            case 7:
            case 8:
                season = 'Лето'; 
                break;
            case 9:
            case 10:
            case 11:
                season = 'Осень'; 
                break;
            default:
                season = 'Что-то здесь не так...';
        }
        alert(`Указанный номер месяца это ${season}`);
        return season;
    }
}

// });