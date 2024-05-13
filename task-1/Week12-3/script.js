const result = document.querySelector('.result');
const button = document.querySelector('.btn');
function toCreateNewWord() {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const randomIndexOne = Math.floor(Math.random() * alphabet.length);
    const randomIndexTwo = Math.floor(Math.random() * alphabet.length);
    const randomIndexThree = Math.floor(Math.random() * alphabet.length);
    const randomIndexFour = Math.floor(Math.random() * alphabet.length);
    return result.innerHTML = alphabet[randomIndexOne]+alphabet[randomIndexTwo]+alphabet[randomIndexThree]+alphabet[randomIndexFour];
}
button.onclick = toCreateNewWord;