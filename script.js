// Добавить товар в корзину
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Товар добавлен в корзину!');
}

// Отображение товаров в корзине
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsElement = document.getElementById('cart-items');
    let totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `${item.name} - ${item.price} руб. <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(${index})">Удалить</button>`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    totalElement.innerText = `Общая сумма: ${total} руб.`;
}

// Удаление товара из корзины
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Оформить заказ
function checkout() {
    localStorage.removeItem('cart');
    alert('Спасибо за покупку!');
    displayCart();
}

// Отобразить корзину при загрузке страницы
window.onload = displayCart;
