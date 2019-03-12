var allProducts = [
    {
        id: '1',
        name: 'Свитер',
        image: 'https://avatars.mds.yandex.net/get-pdb/916253/415ce21e-6247-4a53-b2bf-c73eeadb21f0/s1200?webp=false',
        structure: 'хлопок',
        color: 'белый',
        size: 'XL',
        price: 600,},
    
    {
        id: '2',
        name: 'Блузка',
        image: 'http://new-clothing-shop.ru/images/1016947514.jpg',
        structure: 'полиакрил',
        color: 'голубой',
        size: 'L',
        price: 500,},

    {
        id: '3',
        name: 'Брюки',
        image: 'https://ozon-st.cdn.ngenix.net/multimedia/1015896066.jpg',
        structure: 'хлопок',
        color: 'черный',
        size: 'XL',
        price: 1100,},

    {
        id: '4',
        name: 'Топ',
        image: 'https://ae01.alicdn.com/kf/HTB1Hv3Fiv9TBuNjy1zbq6xpepXah/2018.jpg',
        structure: 'акрил',
        color: 'синий',
        size: 'XS',
        price: 200,},

    {
        id: '5',
        name: 'Юбка',
        image: 'http://womenspeaks.ru/wp-content/gallery/s-chem-nosit-krasnuyu-yubku/s-chem-nosit-krasnuyu-yubku-6.jpg',
        structure: 'хлопок',
        color: 'красный',
        size: 'S',
        price: 800,},
    
    {
        id: '6',
        name: 'Шорты',
        image: 'http://shopcloth.ru/content/images/zoom/LA013EWGR089_1.jpg',
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
        $item.querySelector('.image').src = allProducts[i].image;
        $item.querySelector('.name').textContent = allProducts[i].name; 
        $item.querySelector('.structure').textContent = allProducts[i].structure; 
        $item.querySelector('.color').textContent = allProducts[i].color;
        $item.querySelector('.size').textContent = allProducts[i].size; 
        $item.querySelector('.price').textContent = allProducts[i].price;
    
        $catalog.appendChild($item);
    }  
}

buildCatalog(allProducts);

function getIndex(name) {
    var idx = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            idx = i;
        }
    }
    return idx;
}

$catalog = document.getElementById('catalog');
$catalog.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        var $product = event.target.parentElement;

        var name = $product.querySelector('.name').textContent;
        var price = +$product.querySelector('.price').textContent;
        var image = $product.querySelector('.image').src;
        var color = $product.querySelector('.color').textContent;
        var size = $product.querySelector('.size').textContent;

        var index = getIndex(name);
        if (index === -1) {
            cart.push({name: name, price: price, quantity: 1, image: image, color: color, size: size, subtotal: subtotal = price});
        } else {
            cart[index].quantity++;
            cart[index].subtotal = cart[index].price * cart[index].quantity;
        }
        buildTotal(cart);
    }
});

var cart = [];

var $divCart = document.getElementById('divCart');
$divCart.classList.add('divCart');
var $goodsBlock = document.getElementById('goodsBlock');
var $goods = document.getElementById('goods');
$goods.addEventListener('click', function(event) {
    if (event.target.tagName === 'I') {
        var $product = event.target.parentElement.parentElement;

        var name = $product.querySelector('.name').textContent;

        var index = getIndex(name);
        var product = cart[index];

        if (product.quantity > 1) {
            cart[index].quantity--;
        } else {
            if(confirm('Вы действительно хотите удалить этот товар из корзины?')) {
                cart.splice(index, 1);
            }
        }
        buildTotal(cart);
    }
});

var $clearButton = document.getElementById('btnClear');

function buildTotal(cart) {
    var total = 0;
    var count = 0;
    
    $goods.innerHTML = '';

    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price * cart[i].quantity;
        count = count + cart[i].quantity;

        var $item = $goodsBlock.children[0].cloneNode(true);
        $item.querySelector('.image').src = cart[i].image;
        $item.querySelector('.name').textContent = cart[i].name;
        $item.querySelector('.color').textContent = cart[i].color;
        $item.querySelector('.size').textContent = cart[i].size;
        $item.querySelector('.price').textContent = cart[i].price;
        $item.querySelector('.quantity').textContent = cart[i].quantity;
        $item.querySelector('.subtotal').textContent = cart[i].subtotal;
    
        $goods.appendChild($item);
    }

    $divCart.innerHTML = '';

    var $cart = document.createElement('div');
    $cart.classList.add('cart');

    if (cart.length == 0) {
        $cart.textContent = 'Корзина пуста';
        $clearButton.disabled = true;
    } else {
        $clearButton.disabled = false;
        $cart.textContent = 'В корзине: ' + count + ' товаров на сумму ' + total + ' рублей.';
    }
    $divCart.appendChild($cart);
}
buildTotal(cart);

// очистить корзину
var $clearButton = document.getElementById('btnClear');

function clearCart(cart) {
    var $clearButton = document.getElementById('btnClear');
    $clearButton.addEventListener('click', function(event) {
        if(confirm('Вы действительно хотите очистить корзину?')) {
            cart = [];
            buildTotal(cart);
        }
    });
}

// модальное окно
var $overlay = document.getElementById('overlay');
var $modal = document.getElementById('modal');
var $close = document.getElementById('close');
var $modalImage = document.getElementById('modalImage');
var $imadge = document.getElementsByClassName('image');

document.body.addEventListener('click', function(event) {
    if(event.target.classList.contains('image')) {
        $modalImage.src = event.target.src;
        $modal.style.display = 'block';
        $overlay.style.display = 'block';
    }
});

$close.addEventListener('click', function() {
    $modal.style.display = 'none';
    $overlay.style.display = 'none';
});

window.addEventListener('load', clearCart);