const studentsGrades = [
    {id: 'James', grade: Math.floor(Math.random() * 100)},
    {id: 'Sophia', grade: Math.floor(Math.random() * 100)},
    {id: 'Olivia', grade: Math.floor(Math.random() * 100)},
    {id: 'Henry', grade: Math.floor(Math.random() * 100)},
    {id: 'Daniel', grade: Math.floor(Math.random() * 100)},
    {id: 'Emma', grade: Math.floor(Math.random() * 100)},
    {id: 'Oliver', grade: Math.floor(Math.random() * 100)},
    {id: 'Sebastian', grade: Math.floor(Math.random() * 100)},
    {id: 'Amelia', grade: Math.floor(Math.random() * 100)},
    {id: 'Leo', grade: Math.floor(Math.random() * 100)},
    {id: 'John', grade: Math.floor(Math.random() * 100)},
    {id: 'Penelope', grade: Math.floor(Math.random() * 100)}
];

const studentsList = document.querySelector('.students__list');
studentsList.innerHTML = 
`${studentsGrades[0].id} .............. ${studentsGrades[0].grade}</br>
${studentsGrades[1].id} .............. ${studentsGrades[1].grade}</br>
${studentsGrades[2].id} .............. ${studentsGrades[2].grade}</br>
${studentsGrades[3].id} .............. ${studentsGrades[3].grade}</br>
${studentsGrades[4].id} .............. ${studentsGrades[4].grade}</br>
${studentsGrades[5].id} .............. ${studentsGrades[5].grade}</br>
${studentsGrades[6].id} .............. ${studentsGrades[6].grade}</br>
${studentsGrades[7].id} .............. ${studentsGrades[7].grade}</br>
${studentsGrades[8].id} .............. ${studentsGrades[8].grade}</br>
${studentsGrades[9].id} .............. ${studentsGrades[9].grade}</br>
${studentsGrades[10].id} .............. ${studentsGrades[10].grade}</br>
${studentsGrades[11].id} .............. ${studentsGrades[11].grade}</br>`;

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

const gradesLetters = document.querySelector('.grades__letters');
gradesLetters.innerHTML = 
`${studentsGrades[0].id} .............. ${studentsGrades[0].grade}</br>
${studentsGrades[1].id} .............. ${studentsGrades[1].grade}</br>
${studentsGrades[2].id} .............. ${studentsGrades[2].grade}</br>
${studentsGrades[3].id} .............. ${studentsGrades[3].grade}</br>
${studentsGrades[4].id} .............. ${studentsGrades[4].grade}</br>
${studentsGrades[5].id} .............. ${studentsGrades[5].grade}</br>
${studentsGrades[6].id} .............. ${studentsGrades[6].grade}</br>
${studentsGrades[7].id} .............. ${studentsGrades[7].grade}</br>
${studentsGrades[8].id} .............. ${studentsGrades[8].grade}</br>
${studentsGrades[9].id} .............. ${studentsGrades[9].grade}</br>
${studentsGrades[10].id} .............. ${studentsGrades[10].grade}</br>
${studentsGrades[11].id} .............. ${studentsGrades[11].grade}</br>`;



