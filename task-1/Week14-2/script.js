function random() {
    return Math.floor(Math.random() * 100);
}

const studentsGrades = [
    {name: 'James', grade: random()},
    {name: 'Sophia', grade: random()},
    {name: 'Olivia', grade: random()},
    {name: 'Henry', grade: random()},
    {name: 'Daniel', grade: random()},
    {name: 'Emma', grade: random()},
    {name: 'Oliver', grade: random()},
    {name: 'Amelia', grade: random()},
    {name: 'Leo', grade: random()},
    {name: 'John', grade: random()},
    {name: 'Sebastian', grade: random()},
    {name: 'Penelope', grade: random()}
];

// --------------------------------------------------------------------- выводим на страницу значения массива

const studentName = document.querySelectorAll('.name').forEach((elem, index) => elem.textContent = studentsGrades[index].name);
const studentGrade = document.querySelectorAll('.grade').forEach((elem, index) => elem.textContent = studentsGrades[index].grade);



const grades = studentsGrades.map((student) => student.grade);  // -------- формируем отдельный массив из оценок

const total = grades.reduce((sum, current) => sum + current);  // --------- суммируем все числа массива
const mediumTotal = Math.floor(total/grades.length);           // --------- рассчитываем среднее значение

const resultsMedium = document.querySelector('.results__medium');
resultsMedium.textContent = `Средний балл по результатам теста: ${mediumTotal}.`;

const maxNums = grades.sort((a,b) => b-a);    // -------------------------- сортируем баллы от высокого к низкому

const resultsMax = document.querySelector('.results__max');
resultsMax.textContent = `Максимальный балл по результатам теста: ${maxNums[0]}.`;

const resultsMin = document.querySelector('.results__min');
resultsMin.textContent = `Минимальный балл по результатам теста: ${maxNums[maxNums.length - 1]}.`;

const filtredGrades = grades.filter((item) => item >= 60); // ------------ создаём новый массив с высокими баллами (>=60)

const resultsGood = document.querySelector('.results__good');
resultsGood.innerHTML = `Количество студентов, получивших положительную оценку: ${filtredGrades.length}.</br>
Остальные ${grades.length - filtredGrades.length} чел. не прошли итоговый тест.`;

const resultsBad = document.querySelector('.results__bad');
resultsBad.textContent = `Количество студентов, получивших отрицательную оценку: ${grades.length - filtredGrades.length}.`;

studentsGrades.forEach(function(student) {      // --------------------- условия для преобразования числовых оценок в буквенные
    if (student.grade >= 80) {
        student.grade = 'A';
    } else if (student.grade >= 60 && student.grade < 80) {
        student.grade = 'B';
    } else if (student.grade >= 40 && student.grade < 60) {
        student.grade = 'C';
    } else if (student.grade >= 20 && student.grade < 20) {
        student.grade = 'D';
    } else {
        student.grade = 'E';
    }
});

// --------------------------------------------------------------------- выводим на страницу новые значения

const studentNameLetter = document.querySelectorAll('.student-name').forEach((elem, index) => elem.textContent = studentsGrades[index].name);
const studentGradeLetter = document.querySelectorAll('.grade-letter').forEach((elem, index) => elem.textContent = studentsGrades[index].grade);

