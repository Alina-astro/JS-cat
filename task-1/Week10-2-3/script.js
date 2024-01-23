// Практическое задание 2

function greet() {
    console.log('Я учу JavaScript!');
};
greet();

// Практическое задание 3

let cat = document.getElementById('cat');
function nextImage() {
    cat.src = './assets/images/cat-06.jpg';
};
function prevImage() {
    cat.src = './assets/images/cat-01.jpg';
};

// *** Задание под звёздочкой: вариант результатов с помощью ALERT

// function calculateTotalPrice(quantity=2, price=500) {
// const total = quantity*price;
// alert(`Стоимость покупки: ${total}₽`)
// }
// calculateTotalPrice(5, 1300);

// вариант результатов с помощью вывода сообщения 

const totalPrice = document.getElementById('text');
function calculateTotalPrice(quantity=2, price=500) {
    const total = quantity*price;
    totalPrice.textContent = `Стоимость покупки: ${total.toLocaleString('ru-RU')} ₽`;
};
// calculateTotalPrice(5, 1300);  // пример с заданными параметрами

// *** Задание под звёздочкой: вариант введения значений пользователем

const totalCost = document.getElementById('value');
function calculateTotalCost() {
    const qt = document.getElementById('qt').value;
    const pr = document.getElementById('pr').value;
    const cost = qt*pr;
    totalCost.textContent = `Стоимость покупки: ${cost.toLocaleString('ru-RU')} ₽`;
}