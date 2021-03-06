// Задание 1. Почему следующий код даёт именно такие результаты?'

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - Это префиксная форма записи унарного оператора инкрементрирования (a+a). При этом сначало производится инкрементирование, а потом происходит возвращение обновленного значения.
d = b++; alert(d);           // 1 - Это постфиксная форма записи унарного оператора инкрементрирования. Но при этом сначала происходит возвращение значения (b=1), а потом выполняется инкрементирование.
c = (2+ ++a); alert(c);      // 5 - После того как в первом действии мы увеличили значение операнда а на единицу получим с=(2+2+1)
d = (2+ b++); alert(d);      // 4 - После второго действия мы увеличили значение b на единицу получим d=(2+2+1), но т.к. здесь постфиксная форма, то получим d=(2+2)
alert(a);                    // 3 - В первом примере значение a увеличилось на 1 и в третьем - на 1
alert(b);                    // 3 - Во втором примере значение b увеличилось на 1 и в четвертом - ещё на 1

// Задание 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // выражение (а*=2) аналогично (а=а*2)

alert (x); // x=5

/* Задание 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

function getRandomNumber(min=-10, max=10) {
    return Math.round(Math.random() * (max - min) + min); 	//находим случайно сгенерированное число от -10 до 10 и округляем его
}

var a = getRandomNumber();
var b = getRandomNumber();

alert ('Случайным образом сгенерировалось два числа от -10 до 10: a='+ a +', b='+ b);

if (a >= 0 && b >= 0) {
    if (a >= b) {
        c = a - b;
        alert ('Разница положительных чисел a и b равна: ' + c);
    } else {
        c = b - a;
        alert ('Разница положительных чисел a и b равна: ' + c);
    }
} else if (a < 0 && b < 0) {
    c = a * b;
    alert ('Произведение отрецательных чисел a и b равно: ' + c);
} else {
    c = a + b;
    alert ('Сумма чисел разных знаков a и b равна: ' +c);
}

// Задание 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = +prompt ('Введите любое целое число от 0 до 15');
 switch (a) {
     case 0:
         alert ('0');
     case 1:
         alert ('1');
     case 2:
         alert ('2');
     case 3:
         alert ('3');
     case 4:
         alert ('4');
     case 5:
         alert ('5');
     case 6:
         alert ('6');
     case 7:
         alert ('7');
     case 8:
         alert ('8');
     case 9:
         alert ('9');
     case 10:
         alert ('10');
     case 11:
         alert ('11');    
     case 12:
         alert ('12');
     case 13:
         alert ('13');
     case 14:
         alert ('14');
     case 15:
         alert ('15');
     default:
         break;
 }


// Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function getSumm(a, b) {
    return (a + b);
}

function getSubtract(a, b) {
    return (a - b);
}

function getMultiplic(a, b) {
    return (a * b);
}

function getDiv(a, b) {
    return (a / b);
}

// Задание 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    var result;

    switch (operation) {
        case "summ":
            result = getSumm(arg1, arg2);
            break;
        case "subtract":
            result = getSubtract(arg1, arg2);
            break;
        case "multiplic":
            result = getMultiplic(arg1, arg2);
            break;
        case "div":
            result = getDiv(arg1, arg2);
            break;
        default:
            break;
    }
    return result;
}

alert (mathOperation(25, 5, "div"));

// Задание 7. *Сравнить null и 0. Попробуйте объяснить результат.

alert (null == 0); //false Значения null и undefined равны == друг другу и не равны ничему другому.

// Задание 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

alert (power(2, 4));