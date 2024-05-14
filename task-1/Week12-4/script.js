const newUserName = document.getElementById('new-username');
const newUserAvatar = document.getElementById('new-avatar');
const newUserComment = document.getElementById('new-comment');
const button = document.getElementById('button');
const chat = document.querySelector('.chat');
button.addEventListener('click', function() {
    const newBlockComment = document.createElement('div');  // создаём блок комментария 
    newBlockComment.classList.add('user-comment');   // ------ присваиваем стили по классу 
    chat.append(newBlockComment); // ------------------------- добавляем в блок Чат после заголовка (в конец элемента)
    const userImage = document.createElement('div'); // ------ в блоке комментария создаём div для аватара и повторяем действия с классами
    userImage.classList.add('user-comment__image');
    newBlockComment.prepend(userImage);
    const userAvatar = document.createElement('img');  // ---- внутри div создаём тег img, добавляем стили и 
    userAvatar.style.width = '100%';
    userAvatar.src = newUserAvatar.value; // ----------------- адрес аватара
    userImage.prepend(userAvatar);
    const userName = document.createElement('div'); // ------- создаём блок div для имени и добавляем стили
    userName.classList.add('user-comment__name');
    const name = newUserName.value;  // ---------------------- берём содержимое с именем
    const nameWithoutSpaces = name.trim();  // --------------- убираем пробелы в имени
    const nameLowCase = nameWithoutSpaces.toLowerCase(); // -- делаем все буквы строчными
    const nameWithoutFirst = nameLowCase.slice(1);  // ------- отрезаем слово со 2 символа
    const firstUpCase = nameWithoutSpaces[0].toUpperCase(); // делаем первую букву заглавной
    userName.textContent = firstUpCase+nameWithoutFirst; // -- склеиваем первую букву и отрезанное слово - добавляем в содержание блока имени
    newBlockComment.append(userName); // --------------------- добавляем блок с именем
    const userComment = document.createElement('div'); // ---- создаём блок div для комментария
    const comment = newUserComment.value;
    function checkSpam(comment) {   // ----------------------- создаём функцию для проверки на спам
    const firstCheck = comment.replace(/viagra/gi, '***'); //- сначала исключаем первое спам-слово
    const secondCheck = firstCheck.replace(/XXX/gi, '***'); // затем из получившегося текста исключаем второе спам-слово
    return secondCheck;  // ---------------------------------- возвращаем второе значение, искл-ее два спам-слова
    }
    userComment.textContent = checkSpam(comment); // --------- добавляем содержимое комментария
    newBlockComment.append(userComment); // ------------------ добавляем блок div для комментария
    newUserName.value = ''; // ------------------------------- стираем содержимое ячеек
    newUserAvatar.value = '';
    newUserComment.value = '';
});