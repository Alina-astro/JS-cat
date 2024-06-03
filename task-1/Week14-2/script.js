const studentsList = document.querySelector('.students__list');
const grades = [
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
    {id: 'Penelope', grade: Math.floor(Math.random() * 100)},
];
studentsList.innerHTML = 
`${grades[0].id} .............. ${grades[0].grade}</br>
${grades[1].id} .............. ${grades[1].grade}</br>
${grades[2].id} .............. ${grades[2].grade}</br>
${grades[3].id} .............. ${grades[3].grade}</br>
${grades[4].id} .............. ${grades[4].grade}</br>
${grades[5].id} .............. ${grades[5].grade}</br>
${grades[6].id} .............. ${grades[6].grade}</br>
${grades[7].id} .............. ${grades[7].grade}</br>
${grades[8].id} .............. ${grades[8].grade}</br>
${grades[9].id} .............. ${grades[9].grade}</br>
${grades[10].id} .............. ${grades[10].grade}</br>
${grades[11].id} .............. ${grades[11].grade}</br>`;

