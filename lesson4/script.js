/* Задание 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

var theNumber = parseInt(prompt('Введите число от 0 до 999')); // просим пользователя ввести число

function objectFromNumber(theNumber) {
    var objectNumber = {}; // объявляем объект

    if (!isNaN(theNumber)) { // если ввели число, проверяем его
        if (theNumber > 999) {
            console.log('Вы ввели число больше допустимого диапазона');
            console.log(objectNumber);
        } else {
            objectNumber.единицы = parseInt((theNumber % 100) % 10);//вычисляем единицы
            objectNumber.десятки = Math.floor((theNumber % 100) / 10);//вычисляем десятки
            objectNumber.сотни = Math.floor(theNumber / 100);//вычисляем сотни
            console.log(objectNumber);
        }
    } else {
     console.log('Нужно писать число!');
    //  continue;
    }
}
objectFromNumber(theNumber);


/* Задание 2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу. */

// 1 вариант
var allProducts = [
	{name: 'свитер', price: 600,},
    {name: 'блузка', price: 500,},
    {name: 'брюки', price: 1100,},
    {name: 'топ', price: 200,},
    {name: 'юбка', price: 800,},
    {name: 'шорты', price: 400,}
];

var cart = []; // карзина покупок
cart.push(allProducts[0], allProducts[1], allProducts[2], allProducts[2]);

function countBasketPrice(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
    }
    return total;
}
console.log(countBasketPrice(cart));

// 2 вариант
var cart = [
    { name: 'свитер', price: 600, count: 1, },
    { name: 'блузка', price: 500, count: 1, },
    { name: 'брюки', price: 1100, count: 2, },
]

function getTotal(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price * cart[i].count;
    }
    return total;
}
console.log(getTotal(cart));

/* Задание 3. Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы. */
/*
Каждая сущность представляет собой объект, имеющий определенные свойства. Поэтому сущность "Продукт" нужно представить в виде объекта, различные свойства которого помогут обращаться к нему из различных модулей сайта и  дадут возможность вызывать "Продукт" в разных местах разными методами. */