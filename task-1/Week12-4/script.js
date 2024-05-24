const newUserName = document.getElementById('new-username');
const newUserAvatar = document.getElementById('new-avatar');
const newUserComment = document.getElementById('new-comment');
const button = document.getElementById('button');
const chat = document.querySelector('.chat__box');
const checkYes = document.getElementById('agreement');

button.addEventListener('click', function() {
    const newBlockComment = document.createElement('div');  // создаём блок комментария 
    newBlockComment.classList.add('user-comment');   // ------ присваиваем стили по классу 
    chat.prepend(newBlockComment); // ------------------------ добавляем в блок Чат (в начало элемента)
    
    const newBlockWrap = document.createElement('div');  // -- создаём блок обёртки комментария 
    newBlockWrap.classList.add('user-wrap');   // ------------ присваиваем стили по классу 
    newBlockComment.prepend(newBlockWrap); // ---------------- добавляем в блок user-comment (в начало элемента)

    const userImage = document.createElement('div'); // ------ создаём div для аватара и повторяем действия с классами
    userImage.classList.add('user-comment__image');
    newBlockWrap.prepend(userImage); // ---------------------- добавляем в начало блока user-wrap
    const userAvatar = document.createElement('img');  // ---- создаём тег img, добавляем стили и 
    userAvatar.style.width = '100%';
    userAvatar.src = newUserAvatar.value; // ----------------- адрес аватара
    userImage.prepend(userAvatar); // ------------------------ добавляем в начало блока для аватара
    
    const userName = document.createElement('div'); // ------- создаём блок div для имени и добавляем стили
    userName.classList.add('user-comment__name');
    if (checkYes.checked) {  // ------------------------------ добавляем условие обработки выбранной кнопки "Да"
    const name = newUserName.value;  // ---------------------- берём содержимое с именем
    const nameTrim = name.trim();  // ------------------------ убираем пробелы в имени
    userName.textContent = nameTrim[0].toUpperCase()+nameTrim.slice(1).toLowerCase(); 
    //добавляем в содержание блока имени: склеенные первую заглавную букву и отрезанные оставшиеся строчные 
    } else {  // --------------------------------------------- добавляем условие обработки выбранной кнопки "Нет"
    userName.textContent = 'User';
    }
    newBlockWrap.append(userName); // ------------------------ добавляем блок с именем в конец блока user-wrap

    const userData = document.createElement('div'); // ------- создаём блок div для даты сообщения и добавляем стили
    userData.classList.add('user-comment__data');
    const messageDate = new Date();
    userData.textContent = messageDate;
    console.log(messageDate);
    newBlockWrap.append(userData); // ------------------------ добавляем блок с датой в конец блока user-wrap
    
    const userComment = document.createElement('div'); // ---- создаём блок div для комментария
    const comment = newUserComment.value;
    function checkSpam(comment) {   // ----------------------- создаём функцию для проверки на спам
    const firstCheck = comment.replace(/viagra/gi, '***'); //- сначала исключаем первое спам-слово
    const secondCheck = firstCheck.replace(/XXX/gi, '***'); // затем из получившегося текста исключаем второе спам-слово
    return secondCheck;  // ---------------------------------- возвращаем второе значение, искл-ее два спам-слова
    }
    userComment.textContent = checkSpam(comment); // --------- добавляем содержимое комментария
    newBlockComment.append(userComment); // ------------------ добавляем в блок user-comment (в конец элемента)
    
    newUserName.value = ''; // ------------------------------- стираем содержимое ячеек
    newUserAvatar.value = '';
    newUserComment.value = '';
});