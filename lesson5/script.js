/* Задание 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

function generateChessBoard () {

    var $board = document.getElementById('board');
    var $table = document.createElement('table');

    for(var i = 0; i < 10; i++) {
        var $row = document.createElement('tr'); 
        for(var j = 0; j < 10; j++) {
          var $cell = document.createElement('td');
          $cell.className = 'chessBoard';

          var num = '';
          var str = 'ABCDEFGH';

          if (i == 0 || i == 9) {
              for (k=0; k < str.length; k++) {
                str = str.charAt(j-1);
              }
              $cell.textContent = str;
          } else if (j == 0 || j == 9) {
              num = 9-i;
              $cell.textContent = num;
          } else if (i%2==0 && j%2!=0 || i%2!=0 && j%2==0) {
              $cell.className = 'black';
          } else {
              $cell.className = 'white';
          }


          $row.appendChild($cell);
        }

        $table.appendChild($row);
    }

    $board.appendChild($table);
}

generateChessBoard ();


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

var catalogProducts = [
    product = {
        name: 'свитер',
        model: '3256',
        structure: 'хлопок',
        color: 'белый',
        size: 'XL',
        price: 600,},
    
    product = {
        name: 'блузка',
        model: '1243',
        structure: 'полиакрил',
        color: 'голубой',
        size: 'L',
        price: 500,},

    product = {
        name: 'брюки',
        model: '8321',
        structure: 'хлопок',
        color: 'черный',
        size: 'XL',
        price: 1100,},

    product = {
        name: 'топ',
        model: '7652',
        structure: 'акрил',
        color: 'синий',
        size: 'XS',
        price: 200,},

    product = {
        name: 'юбка',
        model: '8142',
        structure: 'хлопок',
        color: 'красный',
        size: 'S',
        price: 800,},
    
    product = {
        name: 'шорты',
        model: '9325',
        structure: 'хлопок',
        color: 'оранжевый',
        size: 'L',
        price: 400,},
];

var $catalogConteiner = document.getElementById('catalogConteiner');
var $catalog = document.createElement('table');

function getCatalog () {
    for (var i = 0; i < catalogProducts.length; i++) {
        var $row = document.createElement('tr');
        for(var j = 0; j < catalogProducts.length; j++) {
            var $cell = document.createElement('td');
            $cell.className = 'productInCatalog';
            for (var k in product) {
            $cell.textContent = k + ': ' + product[k];
            }
            $row.appendChild($cell);
        }
        $catalog.appendChild($row);
    }
$catalogConteiner.appendChild($catalog);
}
getCatalog();
