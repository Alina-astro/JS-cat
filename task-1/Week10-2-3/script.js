function greet() {
    console.log('Я учу JavaScript!');
};
greet();
let cat = document.getElementById('cat');
function nextImage() {
    cat.src = './assets/images/cat-06.jpg';
};
function prevImage() {
    cat.src = './assets/images/cat-01.jpg';
};

// function calculateTotalPrice(quantity=2, price=500) {
// const total = quantity*price;
// alert(`Стоимость покупки: ${total}₽`)
// }
// calculateTotalPrice(5, 1300);

const totalPrice = document.getElementById('text');
function calculateTotalPrice(quantity=2, price=500) {
    const total = quantity*price;
    totalPrice.textContent = `Стоимость покупки: ${total.toLocaleString('ru-RU')} ₽`;
    return total;
};
// calculateTotalPrice(5, 1300);