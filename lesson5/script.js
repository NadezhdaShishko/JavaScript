/* Задание 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

  var mapping = {
    'H1': '♜',
    'G1': '♞',
    'F1': '♝',
    'E1': '♛',
    'D1': '♚',
    'C1': '♝',
    'B1': '♞',
    'A1': '♜',
    'H8': '♖',
    'G8': '♘',
    'F8': '♗',
    'E8': '♔',
    'D8': '♕',
    'C8': '♗',
    'B8': '♘',
    'A8': '♖',
    'A2': '♟',
    'B2': '♟',
    'C2': '♟',
    'D2': '♟',
    'E2': '♟',
    'F2': '♟',
    'G2': '♟',
    'H2': '♟',
    'A7': '♙',
    'B7': '♙',
    'C7': '♙',
    'D7': '♙',
    'E7': '♙',
    'F7': '♙',
    'G7': '♙',
    'H7': '♙',
  };
  
  var $wrap = document.getElementById('wrap');
  $wrap.classList.add('wrap');
  
  var $chessBoard = document.createElement('div');
  $chessBoard.id = 'chessBoard';
  $chessBoard.classList.add('chess-wrap');
  
  var $digits = document.createElement('ul');
  $digits.classList.add('vertical-right', 'border');
  
  var $letters = document.createElement('ul');
  $letters.classList.add('horisontal-top', 'border')
  
  for(var i = 0; i < 8; i++) {
    var $row = document.createElement('div');
    $row.classList.add('row');
  
    var $liDigit = document.createElement('li');
    $liDigit.textContent = i + 1;
    $digits.appendChild($liDigit);
  
    var $liLetter = document.createElement('li');
    $liLetter.textContent = String.fromCharCode(65 + i);
    $letters.appendChild($liLetter);
  
    for(var j = 0; j < 8; j++) {
      var $cell = document.createElement('div');
      $cell.classList.add('box');
      var coord = String.fromCharCode(65 + j) + (8 - i);
  
      $cell.textContent = mapping[coord];
      
      $row.appendChild($cell);
    }
  
    $chessBoard.appendChild($row);
  }
  
  var $digitsLeft = $digits.cloneNode(true);
  $digitsLeft.classList.remove('vertical-right');
  $digitsLeft.classList.add('vertical-left');
  
  var $lettersBottom = $letters.cloneNode(true);
  $lettersBottom.classList.remove('horisontal-top');
  $lettersBottom.classList.add('horisontal-bottom');
  
  $wrap.appendChild($digits);
  $wrap.appendChild($digitsLeft);
  $wrap.appendChild($letters);
  $wrap.appendChild($lettersBottom);
  $wrap.appendChild($chessBoard);


/* Задание 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */

var $cartConteiner = document.getElementById('cartConteiner');
var $cart = document.createElement('div');

var allProducts = [
    	{name: 'свитер', price: 600,},
        {name: 'блузка', price: 500,},
        {name: 'брюки', price: 1100,},
        {name: 'топ', price: 200,},
        {name: 'юбка', price: 800,},
        {name: 'шорты', price: 400,}
    ];

var cart = []; // карзина покупок

//чтобы в карзине появился товар надо раскомментировать следующую строчку

// cart.push(allProducts[0], allProducts[1], allProducts[2], allProducts[2]); 

function getTotal(cart) {
    if (cart.length == 0) {
        $cart.textContent = "Корзина пуста.";
    } else {
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
        }
    $cart.textContent = "В корзине: " + cart.length + " товаров на сумму " + total + " рублей.";
    }
}
getTotal(cart);

$cartConteiner.appendChild($cart);

/*function addItemsInCart() {
    for (var j = 0; j < allProducts.length; j++) {
        var item = confirm(allProducts[j] + 'Положить этот товар в карзину?');
        if (item = true) {
            cart = cart.push(allProducts[j]);
        }else {
            continue;
        }
    }
    console.log(cart);
}
addItemsInCart(cart); */

// 2 вариант, если сразу собрана корзина
var $cartConteiner = document.getElementById('cartConteiner');
var $cart = document.createElement('div');

var cart = [
    { name: 'свитер', price: 600, count: 1, },
    { name: 'блузка', price: 500, count: 1, },
    { name: 'брюки', price: 1100, count: 2, },
]

function getTotal(cart) {
    if (cart.length == 0) {
        $cart.textContent = "Корзина пуста.";
    } else {
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
        }

    $cart.textContent = "В корзине: " + cart.length + " товаров на сумму " + total + " рублей.";
    }
}
getTotal(cart);

$cartConteiner.appendChild($cart); 

/* Задание 3. Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” 
без вложенного кода. Весь вид каталога генерируется JS. */

var allProducts = [
    {
    name: 'свитер',
    model: '3256',
    structure: 'хлопок',
    color: 'белый',
    size: 'XL',
    price: 600,},
    
    {
    name: 'блузка',
    model: '1243',
    structure: 'полиакрил',
    color: 'голубой',
    size: 'L',
    price: 500,},

    {
    name: 'брюки',
    model: '8321',
    structure: 'хлопок',
    color: 'черный',
    size: 'XL',
    price: 1100,},

    {
    name: 'топ',
    model: '7652',
    structure: 'акрил',
    color: 'синий',
    size: 'XS',
    price: 200,},

    {
    name: 'юбка',
    model: '8142',
    structure: 'хлопок',
    color: 'красный',
    size: 'S',
    price: 800,},
    
    {
    name: 'шорты',
    model: '9325',
    structure: 'хлопок',
    color: 'оранжевый',
    size: 'L',
    price: 400,},
];
var $catalogWrap = document.getElementById('catalogWrap');
var $catalogConteiner = document.createElement('div');
$catalogConteiner.id = 'catalogConteiner';
var $liCatalog = document.createElement('li');
var $divCatalog = document.createElement('div');
var $spanName = document.createElement('span');
$spanName.classList.add('name');
var $spanColor = document.createElement('span');
$spanColor.classList.add('color');
var $spanPrice = document.createElement('span');
$spanPrice.classList.add('price');


var $catalog = document.createElement('ul');
$catalog.id = 'catalog';

function buildCatalog(allProducts) {
    for(var i = 0; i < allProducts.length; i++) {
        var $item = $catalogConteiner.children[0].cloneNode(true);
        $item.querySelector('.name').textContent = allProducts[i].name; 
        $item.querySelector('.color').textContent = ' -- цвет: ' + allProducts[i].color + ',';
        $item.querySelector('.price').textContent = ' цена: ' + allProducts[i].price + ' рублей';

        $catalog.appendChild($item);
    }
    
}
$divCatalog.appendChild($spanName);
$divCatalog.appendChild($spanColor);
$divCatalog.appendChild($spanPrice);
$liCatalog.appendChild($divCatalog);
$catalogConteiner.appendChild($liCatalog);
$catalogWrap.appendChild($catalogConteiner);
$catalogWrap.appendChild($catalog);

buildCatalog(allProducts);
