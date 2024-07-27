const formCarPrice = document.forms.carPrice;
const carBrand = formCarPrice.elements.brand;
const carModel = formCarPrice.elements.model;

const carModelAudi = document.getElementById("carModelAudi");
const carModelBmw = document.getElementById("carModelBmw");
const carModelMercedes = document.getElementById("carModelMercedes");
const carModelPorsche = document.getElementById("carModelPorsche");

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

const carVolume = formCarPrice.elements.volume;
const carMotor = formCarPrice.elements.motor;
const carType = document.querySelector(".carType");

const divOwners = document.createElement("div");
// const divInputsOwners = document.createElement("div");
const divBroken = document.createElement("div");

function addBlockOwners() {
  carType.after(divOwners);
  divOwners.classList.add("checkbox-wrap");
  divOwners.innerHTML = `<p>Владельцев по ПТС</p>
  <div class="checkbox-wrap__radio">
      <input type="radio" id="one-two" name="owners" value="one-two" checked />
      <label for="one-two">1-2</label>
      <input type="radio" id="more_three" name="owners" value="more_three" />
      <label for="more three">более 3х</label>
  </div>`;

  // закомментированный код заменен на divOwners.innerHTML

  //   const labelOwners = document.createElement("p");
  //   divOwners.prepend(labelOwners);
  //   labelOwners.innerText = "Владельцев по ПТС";
  //   divOwners.append(divInputsOwners);
  //   divInputsOwners.classList.add("checkbox-wrap__radio");
}

// function addInputOwners() {
//   const inputOneTwo = document.createElement("input");
//   inputOneTwo.setAttribute("type", "radio");
//   inputOneTwo.setAttribute("id", "one-two");
//   inputOneTwo.setAttribute("name", "owners");
//   inputOneTwo.setAttribute("value", "one-two");
//   const labelOneTwo = document.createElement("label");
//   labelOneTwo.setAttribute("for", "one-two");
//   labelOneTwo.textContent = "1-2";
//   divInputsOwners.appendChild(inputOneTwo);
//   divInputsOwners.appendChild(labelOneTwo);

//   const inputMoreThree = document.createElement("input");
//   inputMoreThree.setAttribute("type", "radio");
//   inputMoreThree.setAttribute("id", "more_three");
//   inputMoreThree.setAttribute("name", "owners");
//   inputMoreThree.setAttribute("value", "more_three");
//   const labelMoreThree = document.createElement("label");
//   labelMoreThree.setAttribute("for", "more_three");
//   labelMoreThree.textContent = "более 3х";
//   divInputsOwners.appendChild(inputMoreThree);
//   divInputsOwners.appendChild(labelMoreThree);
// }

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
      //   addInputOwners();
    } else {
      divOwners.remove();
      //   divInputsOwners.remove();
      divBroken.remove();
    }
  }
}

const carTypeButtons = document.querySelectorAll('input[name="typeCar"]');
for (const carTypeRadio of carTypeButtons) {
  carTypeRadio.addEventListener("change", showOptions);
}
