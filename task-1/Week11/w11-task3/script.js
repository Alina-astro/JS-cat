let priceDeserts = 2250;
let pricePizza = 2970;
let priceRolls = 4580;
let priceSushi = 3520;

const costDeserts = document.getElementById('costDeserts');
costDeserts.textContent = `${priceDeserts.toLocaleString('ru-RU')} ₽`;

const costPizza = document.getElementById('costPizza');
costPizza.textContent = `${pricePizza.toLocaleString('ru-RU')} ₽`;

const costRolls = document.getElementById('costRolls');
costRolls.textContent = `${priceRolls.toLocaleString('ru-RU')} ₽`;

const costSushi = document.getElementById('costSushi');
costSushi.textContent = `${priceSushi.toLocaleString('ru-RU')} ₽`;

const totalValue = document.getElementById('totalValue');
const totalCost = priceDeserts + pricePizza + priceRolls + priceSushi;
console.log(totalCost);
totalValue.textContent = `${totalCost.toLocaleString('ru-RU')} ₽`;
// function calculateTotalCost() {
//     const totalCost = priceDeserts + pricePizza + priceRolls + priceSushi;
//     console.log(totalCost);
//     totalValue.textContent = `${totalCost.toLocaleString('ru-RU')} ₽`;
//     return totalCost;
// }
// calculateTotalCost();

const discValue = document.getElementById('discValue');
const addDisc = document.getElementById('addDisc');

addDisc.addEventListener('click', function() {
    let discCost = totalCost - totalCost*0.2;
    discValue.textContent = `Итого с учётом скидки: ${discCost.toLocaleString('ru-RU')} ₽`;
    totalValue.style.textDecoration = 'line-through';
    totalValue.style.color = 'grey';
    addDisc.style.backgroundColor = 'rgba(202, 202, 202, 0.2)';
})





