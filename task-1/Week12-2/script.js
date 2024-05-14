const poem = document.querySelector('.poem');
const text = poem.innerHTML;
console.log(`1. Количество символов в тексте: ${text.length}`);
const result = text.replace(/;/g, '; \n');
console.log(`2. Текст с переносами строк: \n ${result}`);
const substring = result.replace(/\s/g, '');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
const newText = result.substring(28,49);
console.log(`4. Извлечение подстроки: ${newText}`);
const replacedText = newText.replace('клёне', 'дубе');
console.log(`5. Замена "клёне" на "дубе": ${replacedText}`);
const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
const replacedText3 = result.replace(/клён/g, 'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
const index = result.search('моря');
console.log(`8. Индекс первого вхождения "моря": ${index}`);
const modifiedText = replacedText.replace(replacedText[0], replacedText[0].toUpperCase());
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
function changeAllText() {
    const change1 = text.replace(/;/g, ';\n'); // -------------------------------------------перенос строк не работает
    const change2 = change1.replace(/клён/g, 'дуб');
    const change3 = change2.replace(change2[0], change2[0].toUpperCase());
    const change4 = change3.replace(('лукоморья','бабою','ягой','кащей'), ('Лукоморья','Бабою','Ягой','Кащей')); // -----меняет только последнее слово
    console.log(change4);
    return poem.textContent = change4;
}