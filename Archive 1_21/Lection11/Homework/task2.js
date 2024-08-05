// Є блок із текстом на сторінці та кнопка.
// При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір


const btnChangeColor = document.getElementById('btnChangeColor');
const coloredTextContent = document.getElementById('coloredTextContent');

btnChangeColor.addEventListener("click", () => {
  coloredTextContent.classList.toggle('color-red')
});



