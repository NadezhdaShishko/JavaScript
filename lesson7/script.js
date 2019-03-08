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

var $catalogConteiner = document.getElementById('catalogConteiner');
var $catalog = document.getElementById('catalog');

function buildCatalog(allProducts) {
    for(var i = 0; i < allProducts.length; i++) {
        var $item = $catalogConteiner.children[0].cloneNode(true);
        $item.querySelector('.img').innerHTML = '<img src = "' + allProducts[i].img + '">';
        $item.querySelector('.name').textContent = allProducts[i].name; 
        $item.querySelector('.structure').textContent = allProducts[i].structure; 
        $item.querySelector('.color').textContent = allProducts[i].color;
        $item.querySelector('.size').textContent = allProducts[i].size; 
        $item.querySelector('.price').textContent = allProducts[i].price;
    
        $catalog.appendChild($item);
    }  
}

buildCatalog(allProducts);

$catalog = document.getElementById('catalog');
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

var $goodsBlock = document.getElementById('goodsBlock');
var $goods = document.getElementById('goods');

function handleCatalogButtonClick(event) {
    if (event.target.tagName === 'BUTTON') {
        var $product = event.target.parentElement;

        var $element = $goodsBlock.children[0].cloneNode(true);
        $element.querySelector('.img').innerHTML = $product.querySelector('.img').innerHTML;
        $element.querySelector('.name').textContent = $product.querySelector('.name').textContent;
        $element.querySelector('.color').textContent = $product.querySelector('.color').textContent;
        $element.querySelector('.size').textContent = $product.querySelector('.size').textContent; 
        $element.querySelector('.price').textContent = +$product.querySelector('.price').textContent;    
    
        $goods.appendChild($element);

        var name = $product.querySelector('.name').textContent;
        var price = +$product.querySelector('.price').textContent;

        var index = getIndex(name);
        if (index === -1) {
            cart.push({name: name, price: price, quantity: 1});
            var quantity = $element.querySelector('.quantity').textContent = 1;
        } else {
            cart[index].quantity++;
            
        }
        var subtotal = $element.querySelector('.subtotal').textContent = price * quantity;
        buildTotal(cart);
    }
}

var cart = [];

var $divCart = document.getElementById('divCart');
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

// очистить корзину
var $clearButton = document.getElementById('btnClear');

function clearCart(cart) {
    var $clearButton = document.getElementById('btnClear');
    $clearButton.addEventListener('click', handleClearButtonClick);
}

function handleClearButtonClick(event) {
    cart.length = 0;
    buildTotal(cart);
    $goods.innerHTML = '';
}

window.addEventListener('load', clearCart);