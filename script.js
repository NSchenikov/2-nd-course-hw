// "use strict";

// window.addEventListener("DOMContentLoaded", (event) => {

//task 1
// console.log('Бла-блА-бЛа-бла-БЛА'.toUpperCase());

//task 2
// const substrs = ['Кошка', 'Кит', 'Комар', 'Носорог'];

// let array = substrs.map(element => {
//   return element.toLowerCase();
// });

// function searchStart(substrs, str) {
//     return substrs.filter(substr => substr.toLowerCase().startsWith(str.toLowerCase()));
// }

// console.log(searchStart(array, 'ко'));

//task 3
// let num = 32.58884;
// console.log(`до меньшего целого ${Math.floor(num)}`);
// console.log(`до большего целого ${Math.ceil(num)}`);
// console.log(`до ближайшего целого ${Math.round(num)}`);

//task 4
// let numbers = [52, 53, 49, 77, 21, 32];
// console.log(`Наименьшее это ${Math.min(...numbers)}`);
// console.log(`Наибольшее это ${Math.max(...numbers)}`);

//task 5
// function randomizer() {
//     return Math.round(Math.random() * 10);
// }

// console.log(randomizer());

//task 6
// function getRandomArrNumbers(num) {
//     let arr = [];
//     let len = num / 2;

//     for(let i = 1; i <= len; i++) {
//         arr.push(Math.round(Math.random() * num));
//     }

//     return arr;
// }

// console.log(getRandomArrNumbers(9));

//task 7
// function rnd(a, b) {
//     if(a < b) {
//         return Math.floor(Math.random() * (b - a + 1)) + a;
//     } else {
//         return Math.floor(Math.random() * (a - b + 1)) + b;
//     }
// }

// console.log(rnd(10, 1));

//task 8
// let currentDate = new Date();
// console.log(currentDate);

//task 9
// const currentDate = new Date();
// currentDate.setDate(new Date().getDate() + 73);
// console.log(currentDate);

//task 10
// let myDate = new Date();
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let hour = myDate.getHours();
// let minute = myDate.getMinutes();
// let second = myDate.getSeconds();

// let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] 
// + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];

// if (minute < 10) {
// 	minute = "0" + minute;
// }
// if (second < 10) {
// 	second = "0" + second;
// }

// let fullTime = "Время: " + hour + ":" + minute + ":" + second;

// console.log(fullDate);
// console.log(fullTime);

//task 11
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