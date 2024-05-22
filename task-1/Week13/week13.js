//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(2021, 1, 6);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const year6 = currentDate.getFullYear();
const month6 = currentDate.getMonth() + 1;
const date6 = currentDate.getDate() + 10;
const futureDate = new Date(year6, month6, date6);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log(Math.floor((futureDate - currentDate)/(1000*60*60*24)));

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const year8 = currentDate.getFullYear();
const month8 = currentDate.getMonth();
const date8 = currentDate.getDate() - 5;
const pastDate = new Date(year8, month8, date8);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const days8 = Math.floor((currentDate - pastDate)/(1000*60*60*24));
console.log(`Разница в днях: ${days8}`);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const year10 = currentDate.getFullYear()
const month10 = currentDate.getMonth()
const date10 = currentDate.getDate() + 7;
const nextWeek10 = new Date(year10, month10, date10)
console.log(nextWeek10);

//Задание 11
// Выведите в консоль день недели для nextWeek. Подсказка: для решения задачи используй const options = { weekday: 'long' } и метод toLocaleString()
const nextWeek11 = new Date(currentDate);
nextWeek11.setDate(currentDate.getDate() + 7);
const options = { weekday: 'long' };
const dayOfWeek = nextWeek11.toLocaleString('en-US', options);
console.log(dayOfWeek);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentDate.getFullYear()+5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear, 7, 5);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(futureYear - currentDate.getFullYear());


//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date15 = new Date (Date.parse(strDate))
// const date15 = new Date (strDate)
console.log(date15)

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(Date.parse(strDate))

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date17 = '2023/06/15';
const wrongDate = new Date(Date.parse(date17));
console.log(wrongDate);  
if(isNaN(wrongDate)) {
console.log('Неправильный формат даты')
} else {
console.log('Правильный формат даты')
}                       

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
    console.log('true')
  } else {
    console.log('false')
  }

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number%2 === 0) {
    console.log('true')
  } else {
    console.log('false')
  }

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number%3 === 0) {
    console.log('true')
  } else {
    console.log('false')
  }

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number > 0 && number<= 9) {
    console.log('true')
  } else {
    console.log('false')
  }

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number >= 10 && number <= 99) {
    console.log('true')
  } else {
    console.log('false')
  }

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
    console.log('true')
  } else {
    console.log('false')
  }

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number%5 === 0 || number%7 === 0) {
    console.log('true')
  } else {
    console.log('false')
  }


//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
    console.log('true')
  } else {
    console.log('false')
  }

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number >= 100 && number <= 999) {
    console.log('true')
  } else {
    console.log('false')
  }

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day7 = 3;

switch(day7) {
	case 0:
		day7 = 'Воскресенье';
		break;
	case 1:
		day7 = 'Понедельник';
		break;
	case 2:
		day7 = 'Вторник';
		break;
	case 3:
		day7 = 'Среда';
		break;
	case 4:
		day7 = 'Четверг';
		break;
	case 5:
		day7 = 'Пятница';
		break;
	case 6:
		day7 = 'Суббота';
		break;
	default:
		day7 = 'Неизвестный день недели';
};
console.log(day7);

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';

switch (direction) {
    case 'N':
		direction = 'Север';
		break;
	case 'S':
		direction = 'Юг';
		break;
	case 'E':
		direction = 'Восток';
		break;
	case 'W':
		direction = 'Запад';
		break;
        default:
        direction = 'Неизвестное направление';
}
console.log(direction);
