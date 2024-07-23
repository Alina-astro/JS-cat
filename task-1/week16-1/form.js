let errors = [];

function checkValidityInput(input) {
  switch (input.name) {
    case "name":
      if (input.value.length < 2) {
        return "Your name should be more than 2 symbols.";
      }
      break;
    case "email":
      if (!input.value.includes("@")) {
        return "Your email should include @.";
      }
      break;
    case "age":
      if (input.value <= 0) {
        return "Your age should be more than 0.";
      }
      break;
  }
}

function checkAll() {
  errors = [];
  let inputs = document.querySelectorAll("input");
  console.log(inputs);
  let errorsInfo = document.querySelector(".errorsInfo");

  for (let input of inputs) {
    let error = checkValidityInput(input);
    if (error) {
      errors.push(error);
    }
  }

  if (errors.length > 0) {
    errorsInfo.innerHTML = errors.join("</br>");
  }
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  checkAll();

  if (errors.length > 0) {
    return;
  }

  const formData = new FormData(myForm);

  const data = {};

  formData.forEach(function (value, key) {
    data[key] = value;
  });

  const jsonData = JSON.stringify(data);

  localStorage.setItem("formData", jsonData);
  window.location.href = "result.html";
});
