// "use strict";

// window.addEventListener("DOMContentLoaded", (event) => {

//task 1
// const min = (a, b) => {
//     if(a > b) {
//         return b;
//     } else {
//         return a;
//     }
// };

// console.log(min(0, -1));

//task 2
// const evenodd = (a) => {
//     if(a % 2 == 0) {
//         return "число четное";
//     } else {
//         return "число нечетное";
//     }
// };

// console.log(evenodd(8));

//task 3
// function square(a) {
//     console.log(Math.pow(a, 2));
// }

// function sqr(b) {
//     return Math.pow(b, 2);
// }

// square(3);
// console.log(sqr(4));

//task 4
// let age = function() {
//     let yearsOld = prompt('Сколько Вам лет?');
//     yearsOld = Number(yearsOld);

//     if(yearsOld < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if(yearsOld >= 0 && yearsOld <= 12) {
//         alert('Привет, друг!');
//     } else if(yearsOld >= 13) {
//         alert('Добро пожаловать!');
//     } else {
//         alert('smth get wrong');
//     }
// };

// age();

//task 5
// const numbas = (first, second) => {
//     if(isNaN(first) || isNaN(second)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return first * second;
//     }
// };

// console.log(numbas('yyy', 6));

//task 6
// const cube = () => {
//     let n = prompt("Введите число");

//     if (isNaN(n)) {
//         return "Переданный параметр не является числом";
//     } else {
//         n = Math.pow(n, 3);
//         return `n в кубе равняется ${n}`;
//     }
// };

// console.log(cube());

//task 7
// function getArea(r) {
//     return Math.PI * Math.pow(r, 2);
// }

// function getPerimeter(r) {
//     return 2 * Math.PI * r;
// }

// let circle1 = {
//     radius: 5
// };

// let circle2 = {
//     radius: 6
// };

// circle1.area = getArea(circle1.radius);
// circle2.area = getArea(circle2.radius);
// circle1.perimeter = getPerimeter(circle1.radius);
// circle2.perimeter = getPerimeter(circle2.radius);

// console.log(`Площадь первого круга равна ${circle1.area}`);
// console.log(`Площадь второго круга равна ${circle2.area}`);
// console.log(`Периметр первого круга равен ${circle1.perimeter}`);
// console.log(`Периметр второго круга равен ${circle2.perimeter}`);

//task 8
// let btn = document.querySelectorAll("btn");
// btn[1].addEventListener('click', function(event) {
//     monthNum();
// });

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