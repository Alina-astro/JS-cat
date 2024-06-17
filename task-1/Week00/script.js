// !function() {
//     alert("Hello from IIFE!");
// }();

// void function() {
//     alert("Hello from IIFE!");
// }();

// ------------Изменяет заголовок страницы---------------------------//
const headingElement = document.getElementById("main-heading");
// 		console.log(headingElement.innerHTML);
// 		const newHeadingText = prompt("Введите новый заголовок:");
// 		headingElement.innerHTML = newHeadingText;

// ------------Изменяет заголовок при наведении---------------------------//
headingElement.addEventListener("mouseenter", function () {
  headingElement.textContent = "Benvenuto!";
});

headingElement.addEventListener("mouseleave", function () {
  headingElement.textContent = "Welcome";
});

// ------------Изменяет тему страницы---------------------------//
const bgBody = document.getElementById("body");
function changeBgDay() {
  bgBody.style.backgroundColor = "rgba(86, 32, 50, 0.603)";
}
function changeBgNight() {
  bgBody.style.backgroundColor = "rgba(32, 2, 26, 0.937)";
}
// ------------Изменяет картинку при нажатии кнопки---------------------------//
const image = document.getElementById("image01");
function openImage() {
  image.src = "./assets/images/image01.jpg";
}
// ------------Изменяется цвет кнопки----------------------------------------//
function changeBtn() {
  const btn = document.getElementById("button-test-toggle");
  btn.classList.toggle("maroon");
}

// -------------------------Carousel Image--------------------------------------//
const img = document.querySelector(".gallery-img");

const arrCats = [
  "./assets/images/cat-01.jpg",
  "./assets/images/cat-02.jpg",
  "./assets/images/cat-03.jpg",
  "./assets/images/cat-04.jpg",
  "./assets/images/cat-05.jpg",
  "./assets/images/cat-06.jpg",
];

let i = 0;
function nextImage() {
  if (i < arrCats.length) {
    i++;
  } else {
    img.src = arrCats[arrCats.length - 1];
  }
  img.src = arrCats[i];
}

function prevImage() {
  if (i > 0) {
    i--;
  } else {
    img.src = arrCats[0];
  }
  img.src = arrCats[i];
}

// -------------------------To do list--------------------------------------//
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Обработчик события клика на кнопку "Добавить"
addButton.addEventListener("click", function () {
  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;
  taskList.append(newTask);
  //Очищаем поле ввода после добавления задачи
  taskInput.value = "";
});

// ------------------------- WEEK 15 *** --------------------------------------//
let numbers = [];
// Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
//Используя циклы, выполните следующие операции над массивом numbers:

let numb = -10;
for (numb = -10; numb <= 10; numb++) {
  if (numb !== 0) {
    numbers.push(numb);
  }
}
console.log(numbers);

// Удалите все отрицательные числа из массива

let index = 0;
for (index = 0; index < numbers.length; index++) {
  if (numbers[index] < 0) {
    console.log(index);
    // numbers.splice(index); // ---------------------- удаляет весь массив;
    // numbers.splice(index, 1); // ---------------------- удаляет через один отрицательные значения
  }
}
console.log(numbers);

// Возведите каждое число в квадрат

let numbers2 = []; // ------------------------ создаю новый массив для следующих заданий
let n = 1;
for (n = 1; n <= 10; n++) {
  numbers2.push(n);
}
console.log(numbers2);

for (let f = 0; f < numbers2.length; f++) {
  numbers2[f] = numbers2[f] ** 2; // ------------ переписываю каждый элемент на его квадрат
}
console.log(numbers2);

// Отсортируйте числа в порядке убывания
numbers2.reverse();
console.log(numbers2);

// Выведите полученный массив numbers в консоль
