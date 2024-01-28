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
headingElement.addEventListener("mouseenter", function() {
    headingElement.textContent = 'Benvenuto!';
  });
  
  headingElement.addEventListener("mouseleave", function() {
    headingElement.textContent = 'Welcome';
  });

// ------------Изменяет тему страницы---------------------------//
const bgBody = document.getElementById('body');
function changeBgDay() {
    bgBody.style.backgroundColor = 'rgba(86, 32, 50, 0.603)';
}
function changeBgNight() {
    bgBody.style.backgroundColor = 'rgba(32, 2, 26, 0.937)';
}
// ------------Изменяет картинку при нажатии кнопки---------------------------//
const image = document.getElementById('image01');
function openImage() {
    image.src = './assets/images/image01.jpg'
};
// ------------Изменяется цвет кнопки----------------------------------------//
function changeBtn() {
    const btn = document.getElementById('button-test-toggle');
    btn.classList.toggle('maroon');
}
// -------------------------To do list--------------------------------------//
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Обработчик события клика на кнопку "Добавить"
addButton.addEventListener('click', function () {
const newTask = document.createElement('li');
newTask.textContent = taskInput.value;
taskList.append(newTask);
//Очищаем поле ввода после добавления задачи
taskInput.value = '';

});
// -------------------------To do list--------------------------------------//