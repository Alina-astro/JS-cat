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
  if (i < arrCats.length - 1) {
    i++;
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

// let index = 0;
// for (index = 0; index < numbers.length; index++) {
//   if (numbers[index] < 0) {
//     console.log(index);
//     // numbers.splice(index); // ---------------------- удаляет весь массив;
//     numbers.splice(index, 1); // ---------------------- удаляет через один отрицательные значения
//   }
// }
// console.log(numbers);

let numbersRight = numbers.filter(elem => elem > 0); // ------ создаём новый массив из положительных чисел
numbers = numbersRight; // -------------------------------- присваиваем первому массиву значения нового массива
console.log(numbers);

// Возведите каждое число в квадрат

for (let f = 0; f < numbers.length; f++) {
  numbers[f] = numbers[f] ** 2; // ------------ переписываю каждый элемент на его квадрат
}
console.log(numbers);

// Отсортируйте числа в порядке убывания
numbers.reverse();
console.log(numbers);

// Выведите полученный массив numbers в консоль

// ------------------------- WEEK 16 test --------------------------------------//
const userForm = document.forms.userForm;
const userName = userForm.elements.username;
const userBthd = userForm.elements.birthday;
const userPhone = userForm.elements.phone;
const userEmail = userForm.elements.email;
const userGender = userForm.elements.userGender;
const userAgreement = userForm.elements.checkbox;
const buttonForm = document.querySelector(".user-form__button");
const inputFields = document.querySelectorAll(".input");

const usernameError = document.getElementById("usernameError");
const birthdayError = document.getElementById("birthdayError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const userGenderError = document.getElementById("userGenderError");
const agreementError = document.getElementById("agreementError");
const successForm = document.getElementById("successForm");

//---------------------------------------------- не работает
inputFields.forEach(function (input) {
  input.addEventListener("focus", function () {
    input.style.border = "3px solid #ee82ee"; // -------------- изменение границы при фокусе
  });

  input.addEventListener("blur", function () {
    input.style.border = ""; //-------------------------------- восстановление стандартной границы после потери фокуса
  });
});
//--------------------------------------------------------------

userForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let hasError = false;

  // Очистка предыдущих сообщений об ошибках
  usernameError.style.display = "none";
  birthdayError.style.display = "none";
  phoneError.style.display = "none";
  emailError.style.display = "none";
  userGenderError.style.display = "none";
  agreementError.style.display = "none";
  successForm.style.display = "none";

  if (validateName(userName.value) === false) {
    usernameError.textContent = "Введите корректное имя пользователя.";
    usernameError.style.display = "block";
    hasError = true;
  }

  if (userBthd.value === "") {
    birthdayError.textContent = "Введите дату рождения.";
    birthdayError.style.display = "block";
    hasError = true;
  }

  if (validatePhone(userPhone.value) === false) {
    phoneError.textContent = "Введите корректный номер телефона.";
    phoneError.style.display = "block";
    hasError = true;
  }

  if (validateEmail(userEmail.value) === false) {
    emailError.textContent = "Введите корректный email.";
    emailError.style.display = "block";
    hasError = true;
  }

  if (userGender.checked === "") {
    userGenderError.textContent = "Необходимо согласие с условиями.";
    userGenderError.style.display = "block";
    hasError = true;
  }

  if (userAgreement.checked === false) {
    agreementError.textContent = "Необходимо согласие с условиями.";
    agreementError.style.display = "block";
    hasError = true;
  }

  if (hasError === false) {
    successForm.textContent = "Форма успешно отправлена!";
    successForm.style.display = "block";
  }
});

function validateName(name) {
  let regex = /^[А-Яа-я]{3,}$/;
  return regex.test(name);
}

function validatePhone(phone) {
  let regex = /^[0-9]{11,}$/;
  return regex.test(phone);
}

function validateEmail(email) {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}
