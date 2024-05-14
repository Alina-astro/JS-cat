const result = document.querySelector('.result');
const button = document.querySelector('.btn');
function createNewWord() {
    const ALPHABET = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const randomIndexOne = Math.floor(Math.random() * ALPHABET.length);
    const randomIndexTwo = Math.floor(Math.random() * ALPHABET.length);
    const randomIndexThree = Math.floor(Math.random() * ALPHABET.length);
    const randomIndexFour = Math.floor(Math.random() * ALPHABET.length);
    return result.innerHTML = ALPHABET[randomIndexOne]+ALPHABET[randomIndexTwo]+ALPHABET[randomIndexThree]+ALPHABET[randomIndexFour];
}
button.onclick = createNewWord;