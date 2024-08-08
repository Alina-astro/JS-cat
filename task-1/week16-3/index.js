const formCarPrice = document.forms.carPrice;
const carBrand = formCarPrice.elements.brand;
const carModel = formCarPrice.elements.model;
const carVolume = formCarPrice.elements.volume;
const buttonsMotor = document.querySelectorAll('input[name="motor"]');
const buttonsCondition = document.querySelectorAll('input[name="condition"]');
const blockCondition = document.getElementById("block-condition");
const divOwners = document.createElement("div");
const divBroken = document.createElement("div");
const buttonsPay = document.querySelectorAll('input[name="payment"]');
const buttonReset = document.getElementById("resetButton");

const modelsAudi = [
  { name: "A6", value: "A6" },
  { name: "A8", value: "A8" },
  { name: "Q5", value: "Q5" },
  { name: "e-tron", value: "e-tron" },
];
const modelsBmw = [
  { name: "M5", value: "M5" },
  { name: "X5", value: "X5" },
  { name: "iX", value: "iX" },
  { name: "5 серия GT", value: "5 серия GT" },
];
const modelsMercedes = [
  { name: "E-class", value: "E-class" },
  { name: "Maybach S-class", value: "Maybach S-class" },
  { name: "GLC-class", value: "GLC-class" },
  { name: "EQS", value: "EQS" },
];

const modelsPorsche = [
  { name: "Panamera", value: "Panamera" },
  { name: "Cayenne", value: "Cayenne" },
  { name: "Macan", value: "Macan" },
  { name: "Taycan AT", value: "Taycan AT" },
];

const arrResults = [];

carBrand.addEventListener("change", selectBrand);
carModel.addEventListener("change", selectModel);
carVolume.addEventListener("change", selectVolume);
for (const radioMotor of buttonsMotor) {
  radioMotor.addEventListener("change", selectMotor);
}
for (const radioCondition of buttonsCondition) {
  radioCondition.addEventListener("change", selectCondition);
}
for (const radioPay of buttonsPay) {
  radioPay.addEventListener("change", selectPayment);
}

function selectBrand() {
  carModel.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Выберите модель";
  defaultOption.value = "";
  defaultOption.selected = true;
  defaultOption.disabled = true;
  carModel.appendChild(defaultOption);
  switch (carBrand.value) {
    case "Audi":
      carModelAdding(modelsAudi, carModel);
      arrResults[0] = +2000000;
      break;
    case "BMW":
      carModelAdding(modelsBmw, carModel);
      arrResults[0] = +2500000;
      break;
    case "Mercedes-Benz":
      carModelAdding(modelsMercedes, carModel);
      arrResults[0] = +3000000;
      break;
    case "Porsche":
      carModelAdding(modelsPorsche, carModel);
      arrResults[0] = +4000000;
      break;
    default:
      carBrand.style.borderColor = "red";
      break;
  }
}

const carModelAdding = (models, select) => {
  models.forEach(model => {
    const option = document.createElement("option");
    option.value = model.value;
    option.textContent = model.name;
    select.appendChild(option);
  });
};

function selectModel(e) {
  switch (e.target.value) {
    case "A6":
      arrResults[1] = 2000000;
      break;
    case "A8":
      arrResults[1] = 3000000;
      break;
    case "Q5":
      arrResults[1] = 4000000;
      break;
    case "e-tron":
      arrResults[1] = 5000000;
      break;
    case "M5":
      arrResults[1] = 2500000;
      break;
    case "X5":
      arrResults[1] = 3500000;
      break;
    case "iX":
      arrResults[1] = 4500000;
      break;
    case "5 серия GT":
      arrResults[1] = 5500000;
      break;
    case "E-class":
      arrResults[1] = 3000000;
      break;
    case "Maybach S-class":
      arrResults[1] = 5000000;
      break;
    case "GLC-class":
      arrResults[1] = 7000000;
      break;
    case "EQS":
      arrResults[1] = 9000000;
      break;
    case "Panamera":
      arrResults[1] = 5000000;
      break;
    case "Cayenne":
      arrResults[1] = 7000000;
      break;
    case "Macan":
      arrResults[1] = 9000000;
      break;
    case "Taycan AT":
      arrResults[1] = 11000000;
      break;
  }
}

function selectVolume() {
  if (carVolume.value >= 1.1 && carVolume.value < 2.0) {
    arrResults[2] = 500000;
  } else if (carVolume.value >= 2.0 && carVolume.value < 3.0) {
    arrResults[2] = 1000000;
  } else {
    arrResults[2] = 2000000;
  }
}

function selectMotor(e) {
  switch (e.target.value) {
    case "petrol":
      arrResults[3] = 1000000;
      break;
    case "diesel":
      arrResults[3] = 2000000;
      break;
    case "electric":
      arrResults[3] = 3000000;
      break;
  }
}

function selectCondition(e) {
  if (e.target.value === "new") {
    divOwners.remove();
    divBroken.remove();
    arrResults[4] = 3000000;
    arrResults[5] = 0;
    arrResults[6] = 0;
  } else if (e.target.value === "used") {
    arrResults[4] = -1000000;
    arrResults[6] = 0;
    addButtonsOwners();
    addCheckboxBroken();
    const buttonsOwners = document.querySelectorAll('input[name="owners"]');
    for (const radioOwners of buttonsOwners) {
      radioOwners.addEventListener("change", selectOwners);
    }
    const checkboxBroken = formCarPrice.elements.broken;
    checkboxBroken.addEventListener("change", checkBrokenCar);
  }
}

function addButtonsOwners() {
  divOwners.classList.add("checkbox-wrap");
  divOwners.innerHTML = `<div>Владельцев по ПТС</div>
        <div class="checkbox-wrap__radio">
            <label><input type="radio" name="owners" value="1-2" /> 1-2</label>
            <label><input type="radio" name="owners" value="more_3" /> более 3х</label>
        </div>`;
  blockCondition.after(divOwners);
}

function selectOwners(e) {
  if (e.target.value === "1-2") {
    arrResults[5] = -500000;
  } else if (e.target.value === "more_3") {
    arrResults[5] = -1500000;
  }
}

function addCheckboxBroken() {
  divBroken.classList.add("checkbox-wrap");
  divBroken.innerHTML = `<div>Состояние</div>
  <div class="checkbox-wrap__radio">
      <label><input type="checkbox" name="broken" /> битая</label>
  </div>`;
  divOwners.after(divBroken);
}

function checkBrokenCar() {
  if (this.checked) {
    arrResults[6] =
      -(arrResults[0] + arrResults[1] + arrResults[2] + arrResults[3]) * 0.25;
  } else {
    arrResults[6] = 0;
  }
}

function selectPayment(e) {
  if (e.target.value === "card") {
    arrResults[7] = 500000;
  } else if (e.target.value === "cash") {
    arrResults[7] = 0;
  } else if (e.target.value === "invoice") {
    arrResults[7] = 1000000;
  }
}

let errors = [];
const getPriceButton = document.getElementById("getPriceButton");
getPriceButton.addEventListener("click", function (e) {
  e.preventDefault();
  checkAll();
});

function checkValidityInput(elem) {
  switch (elem.name) {
    case "brand":
      if (elem.value === "") {
        elem.style.borderColor = "red";
        return "Выберите марку";
      } else {
        elem.style.borderColor = "";
      }
      break;
    case "model":
      if (elem.value === "") {
        elem.style.borderColor = "red";
        return "Выберите модель";
      } else {
        elem.style.borderColor = "";
      }
      break;
    case "volume":
      if (elem.value === "") {
        elem.style.borderColor = "red";
        return "Выберите объём двигателя";
      } else {
        elem.style.borderColor = "";
      }
      break;
  }
}

function checkValidityRadioButtons() {
  let motorRadioButtons = [];
  motorRadioButtons = formCarPrice.elements.motor;
  if (
    !motorRadioButtons[0].checked &&
    !motorRadioButtons[1].checked &&
    !motorRadioButtons[2].checked
  ) {
    return "Выберите тип двигателя";
  }

  let conditionRadioButtons = [];
  conditionRadioButtons = formCarPrice.elements.condition;
  if (!conditionRadioButtons[0].checked && !conditionRadioButtons[1].checked) {
    return "Выберите тип автомобиля";
  }

  let ownersRadioButtons = [];
  ownersRadioButtons = formCarPrice.elements.owners;
  if (conditionRadioButtons[1].checked) {
    if (!ownersRadioButtons[0].checked && !ownersRadioButtons[1].checked) {
      return "Выберите количество владельцев";
    }
  }

  let paymentRadioButtons = [];
  paymentRadioButtons = formCarPrice.elements.payment;
  if (
    !paymentRadioButtons[0].checked &&
    !paymentRadioButtons[1].checked &&
    !paymentRadioButtons[2].checked
  ) {
    return "Выберите способ оплаты";
  }
}

function checkAll() {
  errors = [];
  let inputs = formCarPrice.elements;
  let errorsInfo = document.querySelector(".calc-result__error-message");
  for (let input of inputs) {
    let error = checkValidityInput(input);
    if (error) {
      errors.push(error);
      errorsInfo.innerHTML = errors.join("</br>");
    }
  }

  let errorChoice = checkValidityRadioButtons();
  if (errorChoice) {
    errors.push(errorChoice);
    errorsInfo.innerHTML = errors.join("</br>");
  }

  if (errors.length == 0) {
    errorsInfo.textContent = "";
    getPrice();
    getValue();
  }
}

function getPrice() {
  let sum = 0;
  for (let i = 0; i < arrResults.length; i++) {
    sum += Number(arrResults[i]);
  }
  let totalPrice = document.querySelector(".calc-result__total-price");
  totalPrice.textContent = `Итоговая стоимость автомобиля: ${sum.toLocaleString(
    "ru-RU"
  )} ₽`;
}

function getValue() {
  let ownersValue = 0;
  if (formCarPrice.elements.condition.value === "used") {
    ownersValue = formCarPrice.elements.owners.value;
  }
  let brokenValue = false;
  if (formCarPrice.elements.condition.value === "used") {
    brokenValue = formCarPrice.elements.broken.checked;
  }
  obj = {
    brand: carBrand.value,
    model: carModel.value,
    volume: carVolume.value,
    condition: formCarPrice.elements.condition.value,
    owners: ownersValue,
    broken: brokenValue,
    payment: formCarPrice.elements.payment.value,
  };
  console.log(obj);
}

buttonReset.addEventListener("click", function (evt) {
  evt.preventDefault();
  formCarPrice.reset();
  carModel.innerHTML = "";
  document.querySelector(".calc-result__total-price").innerHTML = "";
});
