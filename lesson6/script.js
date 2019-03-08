var allProducts = [
    {
        id: '1',
        name: 'Свитер',
        img: 'https://cdn0.iconfinder.com/data/icons/christmas-2200/64/sweater-clothes-christmas-pullover-clothing-128.png',
        structure: 'хлопок',
        color: 'белый',
        size: 'XL',
        price: 600,},
    
    {
        id: '2',
        name: 'Блузка',
        img: 'https://cdn1.iconfinder.com/data/icons/fashion-icons-1/48/blouse-128.png',
        structure: 'полиакрил',
        color: 'голубой',
        size: 'L',
        price: 500,},

    {
        id: '3',
        name: 'Брюки',
        img: 'https://cdn2.iconfinder.com/data/icons/clothing-and-accessories-1/80/clothing_accesories_clothes_fabric-18-128.png',
        structure: 'хлопок',
        color: 'черный',
        size: 'XL',
        price: 1100,},

    {
        id: '4',
        name: 'Топ',
        img: 'https://cdn2.iconfinder.com/data/icons/clothing-and-accessories-1/80/clothing_accesories_clothes_fabric-24-128.png',
        structure: 'акрил',
        color: 'синий',
        size: 'XS',
        price: 200,},

    {
        id: '5',
        name: 'Юбка',
        img: 'https://cdn1.iconfinder.com/data/icons/clothes-outfit-line-shop-aholic/512/Skirt-128.png',
        structure: 'хлопок',
        color: 'красный',
        size: 'S',
        price: 800,},
    
    {
        id: '6',
        name: 'Шорты',
        img: 'https://cdn3.iconfinder.com/data/icons/fitness-24/512/8-128.png',
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
var $divImg = document.createElement('div');
$divImg.classList.add('img');
var $divName = document.createElement('div');
$divName.classList.add('name');
var $divStructure = document.createElement('div');
$divStructure.classList.add('structure');
var $divColor = document.createElement('div');
$divColor.classList.add('color');
var $divSize = document.createElement('div');
$divSize.classList.add('size');
var $divPrice = document.createElement('div');
$divPrice.classList.add('price');
var $catalogButton = document.createElement('button');
$catalogButton.classList.add('btnCatalog');
$catalogButton.textContent = 'Купить';

var $catalog = document.createElement('ul');
$catalog.id = 'catalog';

function buildCatalog(allProducts) {
    for(var i = 0; i < allProducts.length; i++) {
        var $item = $catalogConteiner.children[0].cloneNode(true);
        $item.querySelector('.img').innerHTML = '<img src = "' + allProducts[i].img + '">';
        $item.querySelector('.name').textContent = allProducts[i].name; 
        $item.querySelector('.structure').textContent = 'Состав: ' + allProducts[i].structure; 
        $item.querySelector('.color').textContent = 'Цвет: ' + allProducts[i].color;
        $item.querySelector('.size').textContent = 'Размер: ' + allProducts[i].size; 
        $item.querySelector('.price').textContent = allProducts[i].price;
    
        $catalog.appendChild($item);
        
    }  
    
}

$divCatalog.appendChild($divImg);
$divCatalog.appendChild($divName);
$divCatalog.appendChild($divStructure);
$divCatalog.appendChild($divColor);
$divCatalog.appendChild($divSize);
$divCatalog.appendChild($divPrice);
$divCatalog.appendChild($catalogButton);
$liCatalog.appendChild($divCatalog);
$catalogConteiner.appendChild($liCatalog);
$catalogWrap.appendChild($catalogConteiner);
$catalogWrap.appendChild($catalog);

buildCatalog(allProducts);

var $catalog = document.getElementById('catalog');
$catalog.addEventListener('click', handleCatalogButtonClick);

function getIndex(name) {
    var idx = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            idx = i;
        }
    }
    return idx;
}

function handleCatalogButtonClick(event) {
    if (event.target.tagName === 'BUTTON') {
        var $product = event.target.parentElement;
        
        var name = $product.querySelector('.name').textContent;
        var price = +$product.querySelector('.price').textContent;


        var index = getIndex(name);
        if (index === -1) {
            cart.push({name: name, price: price, quantity: 1});
        } else {
            cart[index].quantity++;
        }
        buildTotal(cart);
    }
}

var cart = [];

var $cartConteiner = document.getElementById('cartConteiner');
var $divCart = document.createElement('div');
$divCart.id = 'divCart';
$divCart.classList.add('divCart');

function buildTotal(cart) {
    var total = 0;
    var count = 0;
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price * cart[i].quantity;
        count = count + cart[i].quantity;
    }
    $divCart.innerHTML = '';

    var $cart = document.createElement('div');
    $cart.classList.add('cart');

    if (cart.length == 0) {
        $cart.textContent = 'Корзина пуста';
    } else {
        $cart.textContent = 'В корзине: ' + count + ' товаров на сумму ' + total + ' рублей.';
    }
    $divCart.appendChild($cart);
}
buildTotal(cart);

$cartConteiner.appendChild($divCart);

// очистить корзину
var $clearButton = document.createElement('button');
$clearButton.id = 'btnClear';
$clearButton.classList.add('btnClear');
$clearButton.textContent = 'Очистить корзину';

$cartConteiner.appendChild($clearButton);

function clearCart(cart) {
    var $clearButton = document.getElementById('btnClear');
    $clearButton.addEventListener('click', handleClearButtonClick);
}

function handleClearButtonClick(event) {

    cart = [];
    buildTotal(cart);
    console.log('проверка');
}

window.addEventListener('load', clearCart);