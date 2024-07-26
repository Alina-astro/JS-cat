const userForm = document.forms.userForm;
const userName = userForm.elements.username;
const userEmail = userForm.elements.email;
const userAge = userForm.elements.age;
const userGender = userForm.elements.gender;
const userProfession = userForm.elements.profession;
const userPassword = userForm.elements.password;
const userAgreement = userForm.elements.checkbox;
const buttonForm = document.querySelector(".user-form__button");
const inputFields = document.querySelectorAll(".input");
const errors = document.querySelectorAll(".error");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const passwordError = document.getElementById("passwordError");
const agreementError = document.getElementById("agreementError");
const successForm = document.getElementById("successForm");

inputFields.forEach(function (input) {
  input.addEventListener("focus", function () {
    input.style.border = "2px solid #ee82ee"; // -------------- изменение границы при фокусе
  });

  input.addEventListener("blur", function () {
    input.style.border = ""; //-------------------------------- восстановление стандартной границы после потери фокуса
  });
});

function validateName(name) {
  let regex = /^[А-Яа-яA-Za-z ]{2,20}$/;
  return regex.test(name);
}

function validateEmail(email) {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

function validatePassword(password) {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/;
  return regex.test(password);
}

buttonForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  let hasError = false;

  errors.forEach(function (message) {
    message.style.display = "none";
  });

  if (validateName(userName.value) === false) {
    usernameError.textContent = "Введите корректное имя пользователя.";
    usernameError.style.display = "block";
    userName.style.borderColor = "red";
    hasError = true;
  }

  if (validateEmail(userEmail.value) === false) {
    emailError.textContent = "Введите корректный email.";
    emailError.style.display = "block";
    userEmail.style.borderColor = "red";
    hasError = true;
  }

  if (userAge.value <= 0) {
    ageError.textContent = "Укажите корректный возраст.";
    ageError.style.display = "block";
    userAge.style.borderColor = "red";
    hasError = true;
  }

  if (validatePassword(userPassword.value) === false) {
    passwordError.textContent =
      "Введите корректный пароль: не менее 8 символов, содержать как минимум одну заглавную букву, одну строчную букву и одну цифру.";
    passwordError.style.display = "block";
    userPassword.style.borderColor = "red";
    hasError = true;
  }

  if (userAgreement.checked === false) {
    agreementError.textContent = "Необходимо согласие с условиями.";
    agreementError.style.display = "block";
    hasError = true;
  }

  if (hasError === false) {
    const result = [
      userName.value,
      userEmail.value,
      userAge.value,
      userGender.value,
      userProfession.value,
      userPassword.value,
      userAgreement.value,
    ];
    console.log(result);
    successForm.textContent = "Форма успешно отправлена!";
    successForm.style.display = "block";
    inputFields.forEach(function (input) {
      input.value = ""; //-----Очищаем поле ввода после добавления задачи
    });
  }
});
