//Задание 1
//Создайте массив myFirstArray содержащий строки, числа, булевы значения. Выведите его в консоль.
const myFirstArray = ['Hello', 2025, true]
console.log(myFirstArray);

//Задание 2
//Создайте массив mySecondArray, заполните его любыми значениями. Выведите длину массива.
const mySecondArray = [15, 46, 93, 60, 37,81];
console.log(mySecondArray.length);

//Задание 3
//Создайте массив myInformation, который содержит ваше имя, день рождения, месяц рождения и знак зодиака. Выведите массив в консоль, разделяя элементы пробелами. Вам понадобится метод join().
const myInformation = ['Ally', '17', 'nov', 'Scorpion'];
const myNewInf = myInformation.join(' ');
console.log(myNewInf);

//Задание 4
//Добавьте в массив countries значения 'Italy' с индексом 5, 'Spain' с индексом 6 и 'France' с индексом 7. Добавление элементов произведите с помощью метода push().
let countries = ['Austria', 'Belgium', 'Netherlands', 'Czechia', 'Croatia'];
countries.push('Italy', 'Spain', 'France');
console.log(countries);

//Задание 5
//У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива, выведите в консоль последний элемент массива. Для этого можно использовать свойство length и индексацию элементов.
//Обратите внимание, в JavaScript индексация элементов в массиве начинается с 0.
console.log(countries[countries.length-1]);

//Задание 6
//У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива shift, извлеките первый элемент массива и выведите его в консоль. Обратите внимание, что сам массив должен сохраниться в переменной.
const firstCountries = countries.shift();
console.log(firstCountries);

//Задание 7
//У вас есть массив numbers, содержащий несколько чисел. Используя метод массива map, создайте новый массив squaredNumbers, в котором каждый элемент будет являться квадратом соответствующего элемента из массива numbers. Выведите полученный массив squaredNumbers в консоль.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map((num) => {
    return num**2;
});
console.log(squaredNumbers);

//Задание 8
//У вас есть массив colors, содержащий названия различных цветов. Используя метод массива forEach, выведите каждый элемент массива в консоль.
let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
let str = 'black';
colors.forEach((item) => {
    console.log(item);
});
str = ['black', ...colors];
console.log(str);


//Задание 9
//Добавьте в массив russianCities значения 'Санкт-Петербург' с индексом 0, 'Москва' с индексом 1 и 'Екатеринбург' с индексом 2. Добавление элементов выполните с помощью оператора spread.
let russianCities = ['Казань', 'Нижний Новгород'];
const bigRussianCities = ['Санкт-Петербург', 'Москва', 'Екатеринбург'];
russianCities = [...bigRussianCities, 'Казань', 'Нижний Новгород'];
console.log(russianCities);

//Задание 10
//Напишите функцию, которая вычисляет сумму первого (индекс 0) и последнего элемента массива numbers и выводит результат в консоль. При вычислении индекса последнего элемента используйте свойство length массива.
//Обратите внимание, что массив numbers создан в задании 7.
function sum() {
    return (numbers[0] + numbers[numbers.length-1]);
}
console.log(sum());

//Задание 11
//У вас есть массив numbers, содержащий числа от 1 до 10. Напишите функцию filterEvenNumbers, которая принимает этот массив в качестве аргумента и выводт в консоль новый массив, содержащий только чётные числа из исходного массива, с использованием метода filter().
// function filterEvenNumbers(numbers) {
//     const secondsNumbers = numbers.filter((nums) => {
//         return nums%2<1;
//     })
//     return secondsNumbers
// };
// console.log(filterEvenNumbers(numbers));

function filterEvenNumbers(arr) {
    const filterArr = arr.filter((item) => item % 2 == 0);
    console.log(filterArr);
  }
  filterEvenNumbers(numbers);


//Задание 12
//Напишите функцию sortAndPrint, которая принимает копию массива randomNumbers с помощью оператора spread и сортирует его в порядке возрастания с использованием метода sort(). Затем выведите отсортированный массив чисел в консоль.
let randomNumbers = [72, 45, 19, 84, 37, 56, 91, 23, 68, 10, 98, 32];
function sortAndPrint() {
    let copy = [...randomNumbers];
    copy.sort((a,b) => {
        return a - b;
    });
    return copy;
};
console.log(sortAndPrint());

// let copyRandom = [...randomNumbers];
// function sortAndPrint(arr) {
//     arr.sort((a,b) => {
//         return a - b;
//     });
//     console.log(arr);
// };
// sortAndPrint(copyRandom);
