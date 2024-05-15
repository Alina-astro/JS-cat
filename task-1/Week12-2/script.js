const poem = document.querySelector('.poem');
const text = poem.innerHTML;
console.log(`1. Количество символов в тексте: ${text.length}`);
const result = text.replace(/;/g, ';\n');  // ---- или использовать replaceAll(';', ';\n')
console.log(`2. Текст с переносами строк: \n ${result}`);
const substring = result.replace(/\s/g, '');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
const newText = result.substring(28,50);
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
    const change1 = text.replace(/;/g, ';</br>'); // -------- перенос строк на странице делать через тег (т.к. это вёрстка)
    const change2 = change1.replace(/клён/g, 'дуб');
    const change3 = change2.replace(change2[0], change2[0].toUpperCase());
    const change4 = change3.replace(change3[2], change3[2].toUpperCase());
    const change5 = change4.replace('бабою ягой', 'Бабою Ягой'); 
    const change6 = change5.replace('кащей', 'Кащей'); 
    const change7 = change6.replace('русью', 'Русью'); 
    return poem.innerHTML = change7; // --------------------- для отображения на странице HTML используем innerHTML
}