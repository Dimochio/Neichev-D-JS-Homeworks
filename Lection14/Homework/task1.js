// Пишемо свій слайдер зображень, який повинен:

// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

const slider = document.getElementById("slider");
const imgEl = document.getElementById("imgBox");
const indicators = document.getElementById("indicators");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const imgSrcCollection = [
  "../../images/img1.jpg",
  "../../images/img2.jpg",
  "../../images/img3.jpg",
  "../../images/img4.jpg",
  "../../images/img5.jpg",
  "../../images/img6.jpg",
  "../../images/img7.jpg",
  "../../images/img8.png",
];
let imgIndex = 0;
let currentActiveDot;

imgSrcCollection.forEach((el, index) => {
  const div = document.createElement("div");
  div.classList.add("dot");
  div.addEventListener("click", () => {
    updateImage(index);
  });
  div.append(document.createElement("span"));
  indicators.append(div);
});

updateImage(imgIndex)

slider.addEventListener("click", (event) => {
  if (event.target.id === "prevBtn") {
    imgIndex--;
    updateImage(imgIndex)
  }

  if (event.target.id === "nextBtn") {
    imgIndex++;
    updateImage(imgIndex)
  }
});

function updateImage(index) {
  imgEl.setAttribute("src", imgSrcCollection[index]);
  setActiveDot(index);
  prevButton.disabled = index == 0;
  nextButton.disabled = index == imgSrcCollection.length - 1;
}

function setActiveDot(index) {
  const dotsArr = document.querySelectorAll("#slider .dot");

  if (currentActiveDot) {
    currentActiveDot.classList.remove("active");
  }  
  currentActiveDot = dotsArr[index];
  currentActiveDot.classList.add("active");
}
