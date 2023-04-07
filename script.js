// "use strict";

// window.addEventListener("DOMContentLoaded", (event) => {

//1 task
// const arr = [1, 5, 4, 10, 0, 3];
// let element = 10;

// for(let i = 0; i <= arr.length; i++) {
//     if(arr[i] != element) {
//         console.log(arr[i]);
//     } else {
//         break;
//     }
// }

//2 task
// const arr = [1, 5, 4, 10, 0, 3];
// let pos = 4;
// let element = arr.indexOf(pos);
// console.log(element);

//3 task
// const arr = [1, 3, 5, 10, 20];
// let str = arr.join(' ');
// console.log(str);
// console.log(typeof(str));

//4 task
// const arr = [];

// for (let i = 0; i <= 2; i++) {
//     arr.push([]);
//     for(let j = 0; j <= 2; j++) {
//         arr[i][j] = 1;
//     }
// }

// console.log(arr);

//5 task
// let arr = [1, 1, 1];

// for(let i = 0; i <= 2; i++) {
//     arr.push(2);
// }

// console.log(arr);

//6 task
// let arr = [9, 8, 7, 'a', 6, 5];

// for(let i = 0; i <= arr.length; i++) {
//     if(typeof(arr[i]) === 'string') {
//         delete arr[i];
//     }
// }

// arr.sort();

// console.log(arr);

//7 task
// const arr = [9, 8, 7, 6, 5];
// let answer = Number(prompt('Введите элемент, который Вы хотели бы найти'));

// arr.includes(answer) ? alert('Элемент содержится в существующем массиве') : alert('Элемент не содержится в существующем массиве');

//8 task
// let row = 'abcdef';

// row = row.split('');
// row.reverse();
// row = row.join('');
// console.log(row);

//9 task
// let arr = [[1, 2, 3,],[4, 5, 6]];
// let another = [];

// arr.forEach((row) => {
//     row.forEach((el) => {
//         another.push(el);
//     });
// });

// console.log(another);

//10 task
// let arr = [1, 3, 2, 4, 6, 5, 7, 9, 8, 10];

// for(let i = 0; i <= arr.length - 2; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }

//11 task
// let arr = [1, 3, 2, 4, 6, 5, 7, 9, 8, 10];

// function sqr(...ar) {
//     ar = ar.map(item => item ** 2);
//     return ar;
// }

// let newArr = sqr(...arr);

// console.log(newArr);

//12 task
// const getLengthWords = arr => arr.map(str => str.length);

// console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//13 task
// const getNegativeNum = arr => arr.map(num => -num);

// console.log(getNegativeNum([6, 10, 9, 91, 50]));

//14 task
// const array = [];

// for(let i = 0; i <= 9; i++) {
//     array[i] = Math.floor(Math.random() * 10) + 1;
// }

// console.log(array);

// const evens = array.filter(item => item % 2 === 0);

// console.log(evens);

//15 task
// const array = [];

// for(let i = 0; i <= 5; i++) {
//     array[i] = Math.floor(Math.random() * 10) + 1;
// }

// console.log(array);

// let average = array.reduce((a, b) => a + b, 0) / array.length;

// console.log(`среднее арифметическое равно ${average}`);



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