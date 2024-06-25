// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення, отримане випадковим чином (Math.random)

const btnChangeImg = document.getElementById("btnChangeImg");
const img = document.getElementById("someImg");

btnChangeImg.addEventListener("click", getRandomImg);

function getRandomImg() {
  const imgSrcCollection = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg",
    "./images/img4.jpg",
    "./images/img5.jpg",
    "./images/img6.jpg",
    "./images/img7.jpg",
    "./images/img8.png",
  ];
  let index = Math.floor(Math.random() * imgSrcCollection.length);
  img.setAttribute("src", imgSrcCollection[index]);
}
