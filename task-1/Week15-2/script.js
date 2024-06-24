//----------------------------------------------- создаём массив с городами
const CITIES = [
  "Milan",
  "Tokyo",
  "Moscow",
  "New York",
  "San Francisco",
  "Singapore",
];
//----------------------------------------------- создаём пустой массив для температуры городов
const WEATHER = [];
//----------------------------------------------- создаём окно пользователя для введения температуры для городов
for (let city of CITIES) {
  let temp = prompt(`Enter the temperature for the city ${city}`);
  WEATHER.push(Number(temp));
}

//----------------------------------------------- добавляем блок для выведения информации на экран
const wrap = document.querySelector(".wrap");
const divWeather = document.createElement("div");
wrap.append(divWeather);

//----------------------------------------------- добавляем в блок параграфы с городами и их температурой (с условием добавлять "+" для температуры выше 0)
const getWeather = () => {
  for (i = 0; i < CITIES.length; i++) {
    let temp;
    if (WEATHER[i] > 0) {
      temp = `+${WEATHER[i]}`;
    } else {
      temp = `${WEATHER[i]}`;
    }
    // можно заменить на тернарный оператор:
    // let temp = WEATHER[i] > 0 ? `+${WEATHER[i]}` : `${WEATHER[i]}`;
    divWeather.insertAdjacentHTML(
      "beforebegin",
      `<p>${CITIES[i]}: ${temp}&deg;C</p>`
    );
  }
};
getWeather(); //-----------------------------------------------//

const getMinMaxWeather = () => {
  //----------------------------------------------- вычисляем max и min температуры
  const maxTemp = Math.max.apply(Math, WEATHER);
  const minTemp = Math.min.apply(Math, WEATHER);

  //----------------------------------------------- добавляем блок для max и min температур
  const box = document.createElement("div");
  box.classList.add("box");
  divWeather.append(box);

  //----------------------------------------------- добавляем строки в блоке для max и min температур
  box.insertAdjacentHTML(
    "afterbegin",
    `<p>Minimum temperature: ${minTemp}&deg;C</p>`
  );

  box.insertAdjacentHTML(
    "afterbegin",
    `<p>Maximum temperature: ${maxTemp}&deg;C</p>`
  );
};
getMinMaxWeather(); //-----------------------------------------------//
