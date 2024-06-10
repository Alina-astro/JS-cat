const messageDate = document.querySelector('#messageDate');
const result = document.querySelector('#result');
const button = document.querySelector('#button');

button.onclick = function() {
    const birthdayTst = Date.parse(messageDate.value);
    const currentTst = Date.now();
    const timeDif = birthdayTst - currentTst;
    const number = Math.floor(timeDif/(1000*60*60*24));
    if (messageDate.value === '') {
        result.style.color = 'red';
        messageDate.style.borderColor = 'red';
        result.textContent = 'Выберите дату';
    } else {
        result.style.color = '';
        messageDate.style.borderColor = '';
        let days = 
        ([11, 12, 13, 14].includes(number%100)) ? 'дней' :
        (number === 1 || (number>20 && number%10===1)) ? 'день' :
        ([2,3,4].includes(number%10)) ? 'дня':
        'дней';

        result.textContent = `До вашего дня рождения ${number} ${days}!`;
    }  
};

