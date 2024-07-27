//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

function makeOne() {
  const paragraph = document.getElementById("practicum");
  //Ваш код
  const allForms = document.forms;
  paragraph.textContent = `Количество форм на странице: ${allForms.length}`;
}
document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeTwo() {
  const paragraphTwo = document.getElementById("practicum2");
  //Ваш код
  const firstForm = document.forms[0];
  paragraphTwo.textContent = `Атрибут первой формы: ${firstForm.getAttribute(
    "name"
  )}`;
}
document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeThree() {
  const paragraphThree = document.getElementById("practicum3");
  //Ваш код
  const lastForm = document.forms[document.forms.length - 1];
  paragraphThree.textContent = `Атрибут последней формы: ${lastForm.getAttribute(
    "name"
  )}`;
}
document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

function makeFour() {
  const paragraphFour = document.getElementById("practicum4");
  //Ваш код
  const allForms = document.forms;
  let formNames = [];
  for (let form of allForms) {
    let name = form.getAttribute("name");
    formNames.push(name);
  }
  paragraphFour.textContent = formNames.join("; ");
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

function makeFive() {
  const paragraphFive = document.getElementById("practicum5");
  //Ваш код
  const allForms = document.forms;
  const formThree = allForms[2];
  paragraphFive.textContent = formThree.elements.length;
}

document.querySelector(".b-5").addEventListener("click", makeFive);

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

function makeSix() {
  const paragraphSix = document.getElementById("practicum6");
  //Ваш код
  const formTwo = document.forms[1];
  paragraphSix.textContent = formTwo.elements.length;
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

function makeSeven() {
  const paragraphSeven = document.getElementById("practicum7");
  //Ваш код
  const formTwo = document.forms[1];
  const formElements = formTwo.elements;
  let elementsList = [];
  for (let elem of formElements) {
    let nameElem = elem.getAttribute("name");
    elementsList.push(`-${nameElem}`);
  }
  paragraphSeven.textContent = elementsList.join("; ");
}

document.querySelector(".b-7").addEventListener("click", makeSeven);

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

function makeEight() {
  const paragraphEight = document.getElementById("practicum8");
  //Ваш код
  const formOne = document.forms[0];
  const formElements = formOne.elements;
  let elementsList = [];
  for (let elem of formElements) {
    let nameElem = elem.getAttribute("name");
    elementsList.push(nameElem);
  }
  paragraphEight.textContent = elementsList.join("; ");
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

function makeNine() {
  const paragraphNine = document.getElementById("practicum9");
  //Ваш код
  const formElements = document.forms[2].elements;
  let elementsList = [];
  for (let elem of formElements) {
    let nameElem = elem.getAttribute("name");
    elementsList.push(nameElem);
  }
  paragraphNine.textContent = elementsList.join("; ");
}

document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

function makeTen() {
  const paragraphTen = document.getElementById("practicum10");
  //Ваш код
  const radioFormFour = document.forms.lastForm.elements.fourthName;
  paragraphTen.textContent = radioFormFour.value;
}

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

function makeEleven() {
  const paragraphEleven = document.getElementById("practicum11");
  //Ваш код
  const formOne = document.forms.formOne;
  const select = formOne.elements.firstSelect.options;
  let optionsValues = [];
  for (let option of select) {
    const optionValue = option.value;
    optionsValues.push(optionValue);
  }
  paragraphEleven.textContent = optionsValues.join("; ");

  //   const form = document.forms.formOne
  //   const select = form.elements.firstSelect
  //   let optionValues = ''
  //   for (let option of select) {
  //     if(optionValues === '') {
  //       optionValues = option.value
  //     } else {
  //       optionValues += ', ' + option.value
  //     }
  //   }
  //   paragraphEleven.textContent = optionValues
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

function makeTwelve() {
  const paragraphTwelve = document.getElementById("practicum12");
  //Ваш код
  const allElements = document.forms.formTwo;
  const checkElements = allElements.querySelectorAll('[type="checkbox"]');
  let idCheckboxes = [];
  for (let check of checkElements) {
    const idCheck = check.id;
    idCheckboxes.push(idCheck);
  }
  paragraphTwelve.textContent = idCheckboxes.join("; ");
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

function checkButton(e) {
  e.preventDefault();

  const paragraphThirteen = document.getElementById("practicum13");
  //Ваш код
  const formFour = document.forms.lastForm;
  const radio = formFour.elements.fourthName;
  if (radio.checked == true) {
    paragraphThirteen.textContent = "Кнопка выбрана";
  } else {
    paragraphThirteen.textContent = "Кнопка не выбрана";
  }
}

document.querySelector(".b-13").addEventListener("click", checkButton);

//Задание 14
//Выведите на экран название выбранного варианта в первой форме
//Подсказка:
// - Получите доступ к форме с помощью document.forms и сохраните её в переменную
// - Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
// - Установите выбранным второй вариант: select.selectedIndex = 1;
// - Используйте свойство value выбранной опции для получения выбранного варианта
// - Используйте условный оператор (if) для проверки выбранного варианта
// - Если выбран первый вариант, выведите сообщение "Выбран первый вариант" на страницу
// - Если выбран второй вариант, выведите сообщение "Выбран второй вариант" на страницу
// - Если выбран третий вариант, выведите сообщение "Выбран третий вариант" на страницу

function checkOption() {
  const paragraphFourteen = document.getElementById("practicum14");
  //Ваш код
  const select = document.forms.formOne.elements.firstSelect;
  //   select.selectedIndex = 1;
  const optionValue = select[1].value;
  if (optionValue === "Опция 1") {
    paragraphFourteen.textContent = "Выбран первый вариант";
  } else if (optionValue === "Опция 2") {
    paragraphFourteen.textContent = "Выбран второй вариант";
  } else {
    paragraphFourteen.textContent = "Выбран третий вариант";
  }
}

document.querySelector(".b-14").addEventListener("click", checkOption);

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
  //Ваш код
  const select = document.forms.formOne.elements.firstSelect;
  select.selectedIndex = 2;
  console.log(select.selectedIndex);
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
  //Ваш код
  const checkboxThree = document.forms.formTwo.elements.checkboxThree;
  checkboxThree.checked = true;
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную formOne
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки
const formOne = document.forms.formOne;
formOne.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки

  const firstName = formOne.elements.firstName.value;
  const firstEmail = formOne.elements.firstEmail.value;
  const errorMessage = document.getElementById("errorMessage");
  if (firstName.trim() === "") {
    errorMessage.textContent = "Введите имя";
    return;
  }
  if (firstEmail.trim() === "") {
    errorMessage.textContent = "Введите Email";
    return;
  } else {
    errorMessage.textContent = "";
  }
  formOne.reset(); //Сброс полей формы
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки

//Ваш код
const formReset = () => {
  const formOne = document.forms.formOne;
  formOne.reset();
};

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие change для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

//Ваш код
const select = document.forms.formOne.elements.firstSelect;
select.addEventListener("change", function () {
  if (select.value === "Опция 1") {
    formOne.style.backgroundColor = "gold";
  } else if (select.value === "Опция 2") {
    formOne.style.backgroundColor = "pink";
  } else {
    formOne.style.backgroundColor = "lime";
  }
});
//   if (select.selectedIndex === 0) {
//     formOne.style.backgroundColor = "gold";
//   }
//   if (select.selectedIndex === 1) {
//     formOne.style.backgroundColor = "pink";
//   }
//   if (select.selectedIndex === 2) {
//     formOne.style.backgroundColor = "lime";
//   }
//   console.log(select.value);

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие input для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp: /^[^\s@]+@[^\s@]+.[^\s@]+$/), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

const emailInput = document.forms.formOne.elements.firstEmail;
const errorMessage = document.getElementById("errorMessage");
emailInput.addEventListener("input", function () {
  function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return regex.test(email);
  }
  if (validateEmail(emailInput.value) === false) {
    errorMessage.textContent = "Введите корректный email.";
  } else {
    errorMessage.textContent = "";
    emailInput.style.borderColor = "lime";
  }
});

// const mailValidation = () => {
//   const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
//   if (!regex.test(emailInput.value)) {
//     emailInput.style.border = "2px solid red";
//     errorMessage.textContent = "Введите корректный email.";
//   } else {
//     errorMessage.textContent = "";
//     emailInput.style.borderColor = "lime";
//   }
// };
// mailValidation();

// const mailValidation = () => {
// 	const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/
// 	if(!regex.test(emailInput.value)) {
// 	  emailInput.style.border = '2px solid red'
// 	  errorMessage.textContent = 'Некорректный email'
// 	}else {
// 	  errorMessage.textContent = ''
// 	  emailInput.style.border = ''
// 	}
//   }
//   mailValidation()

//Задание 21
//При отправке второй формы выполните проверку всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.forms.formTwo.addEventListener("submit", function (evt) {
  evt.preventDefault();

  //   const checkbox1 = document.getElementById("checkbox1").checked;
  //   const checkbox2 = document.getElementById("checkbox2").checked;
  //   const checkbox3 = document.getElementById("checkbox3").checked;
  //Ваш код

  const errorMessage = document.getElementById("result21");
  const checkboxes = document.forms.formTwo.querySelectorAll(
    'input[type="checkbox"]'
  );
  let isChecked = false;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      isChecked = true;
    }
  });

  if (!isChecked) {
    errorMessage.textContent = "Проверка не пройдена";
  } else {
    errorMessage.textContent = "Проверка пройдена";
  }

  //   if (!checkbox1 && !checkbox2 && !checkbox3) {
  //     evt.preventDefault();
  //     errorMessage.textContent = "Пожалуйста, выберите хотя бы один чекбокс.";
  //   } else {
  //     errorMessage.textContent = "";
  //   }
});

// const formSubmit = () => {
// 	const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]')
// 	let isChecked = false

// 	checkboxes.forEach(function (checkbox) {
// 		if (checkbox.checked) {
// 			isChecked = true;
// 		}
// 	})

// 	if (!isChecked) {
// 		document.getElementById('practicum').textContent = 'Проверка не пройдена'
// 	} else {
// 		document.getElementById('practicum').textContent = 'Проверка пройдена'
// 	}
// }
// formSubmit()

//Задание 22
//При отправке третьей формы выполните проверку поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector(".b-22").onclick = function (event) {
  const nameInput = document.forms.formThree.elements.thirdName;
  //Ваш код
  const errorMessage = document.getElementById("result22");
  if (nameInput.value === "") {
    event.preventDefault();
    errorMessage.textContent = "Пожалуйста, введите имя пользователя.";
    return;
  }
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled
// function make23() {
//   //Ваш код
//   const button23 = document.getElementById("b-23");
//   const radioBtn = document.forms.lastForm.elements.fourthName;
//   if (!radioBtn.checked) {
//     console.log("not agree");
//     button23.disabled = true;
//     button23.style.backgroundColor = "gray";
//   } else {
//     console.log("agree");
//     button23.style.backgroundColor = "";
//   }
// }

// make23(); // отдельно всё работает

// const formSubmit = () => {
// 	const btn = document.forms.formFour.elements.fourthButton
// 	const radioBtn = document.forms.formFour.elements.fourthName

// 	if(!radioBtn.checked) {
// 	  btn.disabled = true
// 	} else {
// 	  btn.disabled = false
// 	}
//   }
//   formSubmit()

//Задание 24
//Найдите все поля ввода на странице (querySelectorAll) и установите им атрибут "placeholder" со значением "Введите данные" (используйте метод forEach).

document.querySelector(".b-24").addEventListener("click", function () {
  //Ваш код
  const inputs = document.querySelectorAll(".form__input");
  inputs.forEach(function (input) {
    input.setAttribute("placeholder", "Введите данные");
  });
});

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector(".b-25").addEventListener("click", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    //Ваш код
    input.addEventListener("focus", function () {
      input.style.outline = "none";
      input.style.border = "1px solid #00ff00"; //Изменение границы при фокусе
    });

    input.addEventListener("blur", function () {
      input.style.border = ""; //Восстановление стандартной границы после потери фокуса
    });
  });
});

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector(".b-26").addEventListener("click", function (event) {
  event.preventDefault();
  //Ваш код
  const message = document.getElementById("result26");
  const inputName = document.forms.formThree.elements.thirdName;
  message.textContent = inputName.placeholder;
});

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll(".secondForm input");

formTwoInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    //Ваш код
    const message = document.getElementById("result27");
    message.textContent = "Изменение внесено";
  });
});

//Задание 28
//При выборе любой из опций выпадающего списка в третьей форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormOne = document.getElementById("firstSelect");

selectFormOne.addEventListener("change", function () {
  //Ваш код
  const message = document.getElementById("result28");
  message.textContent = "Опция выбрана";
});

// 29

// При отправке второй формы выведите значения выбранных вариантов в элемент с id 'practicum'

// const formTwo = document.forms.formTwo;
// const resultElement = document.getElementById('practicum')

// function formSubmit(form, paragraph) {
// 	const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked')
// 	const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent)

// 	//Ваш код
//   resultElement.textContent = selectedOptions;
// }

// formSubmit(formTwo, resultElement)
