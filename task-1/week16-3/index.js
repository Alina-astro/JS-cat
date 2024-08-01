const formCarPrice = document.forms.carPrice;
const carBrand = formCarPrice.elements.brand;
const carModel = formCarPrice.elements.model;
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

carBrand.addEventListener("change", () => {
  console.log(carBrand.value);
  carModel.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Выберите модель";
  defaultOption.selected = true;
  defaultOption.disabled = true;
  carModel.appendChild(defaultOption);
  switch (carBrand.value) {
    case "Audi":
      carModelAdding(modelsAudi, carModel);
      break;
    case "BMW":
      carModelAdding(modelsBmw, carModel);
      break;
    case "Mercedes-Benz":
      carModelAdding(modelsMercedes, carModel);
      break;
    case "Porsche":
      carModelAdding(modelsPorsche, carModel);
      break;
    default:
      carBrand.style.borderColor = "red";
      break;
  }
});

const carModelAdding = (models, select) => {
  models.forEach(model => {
    const option = document.createElement("option");
    option.value = model.value;
    option.textContent = model.name;
    select.appendChild(option);
  });
};
