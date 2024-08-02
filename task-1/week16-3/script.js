const formCarPrice = document.forms.carPrice;
const carBrand = formCarPrice.elements.brand;
// const carModel = formCarPrice.elements.model;

const carModelAudi = document.getElementById("carModelAudi");
const carModelBmw = document.getElementById("carModelBmw");
const carModelMercedes = document.getElementById("carModelMercedes");
const carModelPorsche = document.getElementById("carModelPorsche");

const carVolume = formCarPrice.elements.volume;
const carMotor = formCarPrice.elements.motor;
const typeCar = formCarPrice.elements.typeCar;
const carType = document.querySelector(".carType");

// const divOwners = document.createElement("div");
const divInputsOwners = document.createElement("div");
const divBroken = document.createElement("div");

const getPriceButton = document.getElementById("getPriceButton");
let totalPrice = 2000000;

carBrand.addEventListener("change", function () {
  chooseCarModel();
});

function chooseCarModel() {
  switch (carBrand.value) {
    case "Audi":
      carModelAudi.style.display = "block";
      carModelBmw.style.display = "none";
      carModelMercedes.style.display = "none";
      carModelPorsche.style.display = "none";
      break;

    case "BMW":
      carModelAudi.style.display = "none";
      carModelBmw.style.display = "block";
      carModelMercedes.style.display = "none";
      carModelPorsche.style.display = "none";
      break;

    case "Mercedes-Benz":
      carModelAudi.style.display = "none";
      carModelBmw.style.display = "none";
      carModelMercedes.style.display = "block";
      carModelPorsche.style.display = "none";
      break;

    case "Porsche":
      carModelAudi.style.display = "none";
      carModelBmw.style.display = "none";
      carModelMercedes.style.display = "none";
      carModelPorsche.style.display = "block";
      break;
  }
}

function addBlockOwners() {
  const divOwners = document.createElement("div");
  divOwners.classList.add("checkbox-wrap");
  divOwners.innerHTML = `<p>Владельцев по ПТС</p>
    <div class="checkbox-wrap__radio">
        <input type="radio" id="one-two" name="owners" value="one-two" checked />
        <label for="one-two">1-2</label>
        <input type="radio" id="more_three" name="owners" value="more_three" />
        <label for="more three">более 3х</label>
    </div>`;
  carType.after(divOwners);
}

function addBlockBroken() {
  carType.after(divBroken);
  divBroken.classList.add("checkbox-wrap");
  divBroken.innerHTML = `<p>Состояние</p>
  <div class="checkbox-wrap__radio">
      <input type="checkbox" id="brokenCar" name="broken" />
      <label>битая</label>
  </div>`;
}

function showOptions(e) {
  if (this.checked) {
    console.log(this.value);
    if (this.value === "used") {
      console.log("used car");
      divOwners.innerHTML = "";
      //   divInputsOwners.innerHTML = "";
      divBroken.innerHTML = "";
      addBlockBroken();
      addBlockOwners();
      const owners = formCarPrice.elements.owners;
      console.log(owners.value);
      //   addInputOwners();
    } else {
      divOwners.remove();
      //   divInputsOwners.remove();
      divBroken.remove();
    }
  }
  return formCarPrice.elements.owners;
}

const carTypeButtons = document.querySelectorAll('input[name="typeCar"]');
for (const carTypeRadio of carTypeButtons) {
  carTypeRadio.addEventListener("change", showOptions);
}

const carCalcAudi = () => {
  switch (carModelAudi.value) {
    case "A6":
      totalPrice += 2000000;
      break;
    case "A8":
      totalPrice += 4000000;
      break;
    case "Q5":
      totalPrice += 6000000;
      break;
    case "e-tron":
      totalPrice += 8000000;
      break;
  }
  if (carVolume.value >= 1.1 && carVolume.value < 2.0) {
    totalPrice += 500000;
  } else if (carVolume.value >= 2.0 && carVolume.value < 3.0) {
    totalPrice += 1000000;
  } else {
    totalPrice += 2000000;
  }
  switch (carMotor.value) {
    case "petrol":
      totalPrice += 100000;
      break;
    case "diesel":
      totalPrice += 1000000;
      break;
    case "electric":
      totalPrice += 5000000;
      break;
  }
  switch (typeCar.value) {
    case "new":
      totalPrice += 1000000;
      break;
    case "used":
      const carOwners = formCarPrice.elements.owners;
      console.log(carOwners.value);
      if (carOwners.value === "one-two") {
        totalPrice -= 3000000;
      } else {
        totalPrice -= 5000000;
      }
      break;
  }
};

function carCalc() {
  switch (carBrand.value) {
    case "Audi":
      carCalcAudi();
      break;

    case "BMW":
      switch (carModelBmw.value) {
        case "M5":
          totalPrice += 3000000;
          break;
        case "X5":
          totalPrice += 5000000;
          break;
        case "iX":
          totalPrice += 7000000;
          break;
        case "5 серия GT":
          totalPrice += 10000000;
          break;
      }
      break;

    case "Mercedes-Benz":
      switch (carModelMercedes.value) {
        case "E-class":
          totalPrice += 8000000;
          break;
        case "Maybach S-class":
          totalPrice += 11000000;
          break;
        case "GLC-class":
          totalPrice += 9000000;
          break;
        case "EQS":
          totalPrice += 12000000;
          break;
      }
      break;

    case "Porsche":
      switch (carModelPorsche.value) {
        case "Panamera":
          totalPrice += 10000000;
          break;
        case "Cayenne":
          totalPrice += 13000000;
          break;
        case "Macan":
          totalPrice += 15000000;
          break;
        case "Taycan AT":
          totalPrice += 17000000;
          break;
      }
      break;
  }
  return totalPrice;
}

getPriceButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(carBrand.value);
  console.log(carVolume.value);
  console.log(carMotor.value);
  console.log(typeCar.value);
  //   console.log(carOwners.value);

  console.log(totalPrice);
});
