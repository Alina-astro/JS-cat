//Задание 1
// Выведите числа от 1 до 10 в консоль

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let f = 1; f <= 20; f++) {
  if (f % 2 === 0) {
    console.log(f);
  }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let g = 10; g >= 1; g--) {
  console.log(g);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let j = 1; j <= 10; j++) {
  console.log(`${j} * 5 = ${j * 5}`);
}
// вариант 2
for (let number = 1; number <= 10; number++) {
  console.log(`5 * ${number}`);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
let sumNumb = 0;
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  sumNumb += numbers[i];
}
console.log(sumNumb);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = "Hello";
for (let l of str) {
  console.log(l);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let elem of array) {
  console.log(elem);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ["Hello, world!", "How are you?"];

let firstSent = sentences.join(", ");
// console.log(firstSent);

firstSent = firstSent.split(/, | /);
// console.log(firstSent);

firstSent.forEach(elem => {
  elem = elem.replace("?", "");
  elem = elem.replace("!", "");
  console.log(elem);
});

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum12 = 0;
for (let item of numbers) {
  sum12 += item;
}
console.log(sum12);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ["apple", "banana", "cherry"];
for (let item of list) {
  console.log(item.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива list в верхний регистр
for (let item of list) {
  console.log(item.toUpperCase());
}

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

for (let char of greeting) {
  for (let v of vowels) {
    if (char.includes(v)) {
      vowelCount++;
    }
  }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ["Hello", "world", "!"];
console.log(words.join(" "));

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let b = 10;
while (b >= 1) {
  console.log(b);
  b--;
}

//Задание 19 ?????
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
// const allNumbers = [1, 2, 3, -4, 5];
// let allPositive = true;
// while (allNumbers[i] < 0) {
// 	console.log(`не все элементы положительные`);
// 	break
// };

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let index = 0;
do {
  if (random[index] < 0) {
    break;
  }
  console.log(random[index]);
  index++;
} while (index < random.length);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

for (let m = 1; m <= 20; m++) {
  if (m % 3 === 0) {
    continue;
  }
  console.log(m);
}

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

let sum22 = 0;
for (let number = 1; sum22 <= 100; number++) {
  sum22 += number;
}
console.log(sum22);

//Задание 23  ???
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let randomString = '';

// Напишите генератор случайных строк до 7 символов и выведите результат в консоль.//
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randString = "";
function getIndex() {
  return Math.floor(Math.random() * alphabet.length);
}
while (randString.length < 6) {
  randString += alphabet[getIndex()];
}
console.log(randString);

// вариант 2
const generateRandomString = length => {
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    result += alphabet[randomIndex];
  }
  return result;
};
const randomString = generateRandomString(6);
console.log(randomString);

// Выведите в консоль все отрицательные числа массива, используя цикл for...of.
// const allNumbers = [1, 2, 3, -4, 5]
// for (let numb of allNumbers) {
//   if (numb < 0) {
//     console.log(numb);
//   }
// }
