window.addEventListener("DOMContentLoaded", (event) => {

//task 1
let a = 10;
alert(a);
a = 20;
console.log(a);

//task 2
let firstIphoneEditionYear = 2007;
console.log(firstIphoneEditionYear);

//task 3
let javascriptFather = 'Brendan Eich';
console.log(javascriptFather);

//task 4
let ten = 10;
let two = 2;
alert(ten + two);
alert(ten - two);
alert(ten * two);
alert(ten / two);

// task 5
let result = 2 ** 5;
alert(result);

// task 6
a = 9;
let b = 2;
alert(a % b);

//task 7 
let num = 1;
num += 5; //6
num -= 3; //3
num *= 7; //21
num /= 3; //7
num += 1; //8
num -= 1; //7
alert(num);

//task 8
let age = prompt('Сколько вам лет?');
alert(`user is ${age} years old`);

//task 9
let user = {
    name: 'Nikita',
    age: 27,
    isAdmin: true
};
// console.log(user);

//task 9.1
user['cityOfResidence'] = "Moscow";
// console.log(user);

//task 9.2
user.age = 28;
// console.log(user);

//task 9.3
delete user.cityOfResidence;
// console.log(user);

//task 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "");
alert(user[info]);

//task 10
let guestName = prompt("Назовите Ваше имя");
alert(`Привет, ${guestName}`);

});