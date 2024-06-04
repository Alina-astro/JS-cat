const studentsGrades = [
    {name: 'James', grade: Math.floor(Math.random() * 100)},
    {name: 'Sophia', grade: Math.floor(Math.random() * 100)},
    {name: 'Olivia', grade: Math.floor(Math.random() * 100)},
    {name: 'Henry', grade: Math.floor(Math.random() * 100)},
    {name: 'Daniel', grade: Math.floor(Math.random() * 100)},
    {name: 'Emma', grade: Math.floor(Math.random() * 100)},
    {name: 'Oliver', grade: Math.floor(Math.random() * 100)},
    {name: 'Amelia', grade: Math.floor(Math.random() * 100)},
    {name: 'Leo', grade: Math.floor(Math.random() * 100)},
    {name: 'John', grade: Math.floor(Math.random() * 100)},
    {name: 'Sebastian', grade: Math.floor(Math.random() * 100)},
    {name: 'Penelope', grade: Math.floor(Math.random() * 100)}
];

// --------------------------------------------------------------------- выводим на страницу значения массива

const studentName = document.querySelectorAll('.name').forEach((elem, index) => elem.textContent = studentsGrades[index].name);
const studentGrade = document.querySelectorAll('.grade').forEach((elem, index) => elem.textContent = studentsGrades[index].grade);



const grades = studentsGrades.map((student) => {              // -------- формируем отдельный массив из оценок
    return student.grade;
});

const total = grades.reduce((sum, current) => sum + current);  // ------ суммируем все числа массива
const mediumTotal = Math.floor(total/grades.length);           // ------ рассчитываем среднее значение

const resultsMedium = document.querySelector('.results__medium');
resultsMedium.textContent = `Средний балл по результатам теста: ${mediumTotal}.`;

const maxNums = grades.sort((a,b) => {     // -------------------------- сортируем баллы от высокого к низкому
    return b-a;
});

const resultsMax = document.querySelector('.results__max');
resultsMax.textContent = `Максимальный балл по результатам теста: ${maxNums[0]}.`;

const resultsMin = document.querySelector('.results__min');
resultsMin.textContent = `Минимальный балл по результатам теста: ${maxNums[maxNums.length - 1]}.`;

const filtredGrades = grades.filter((item) => {      // ---------------- создаём новый массив с высокими баллами (>=60)
    return item >= 60;
});

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

