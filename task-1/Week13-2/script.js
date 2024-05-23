const messageDate = document.querySelector('#messageDate');
const result = document.querySelector('#result');
const button = document.querySelector('#button');

button.onclick = function() {
    const birthdayTst = Date.parse(messageDate.value);
    console.log(birthdayTst);
    const currentTst = Date.now();
    console.log(currentTst);
    const timeDif = birthdayTst - currentTst;
    const days = Math.floor(timeDif/(1000*60*60*24));
    if (messageDate.value === '') {
        result.style.color = 'red';
        messageDate.style.borderColor = 'red';
        result.textContent = 'Выберите дату';
    } else {
        result.style.color = '';
        messageDate.style.borderColor = '';
        result.textContent = `До вашего дня рождения осталось ${days} дней!`;
    }


    
}