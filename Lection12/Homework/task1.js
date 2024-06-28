// На сторінці є дві кнопки.
// При натисканні на першу кнопку користувач повинен ввести в prompt посилання,
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).


const enterLinkBtn = document.getElementById("enterLinkBtn");
const redirectBtn = document.getElementById("redirectBtn");
let savedLink;

enterLinkBtn.addEventListener("click", function () {
  let link = prompt("Enter url:");
  if (link) {
    if (!link.startsWith("http://") && !link.startsWith("https://")) {
      savedLink = "https://" + link;
    } else {
      savedLink = link;
    }
  }
});

redirectBtn.addEventListener("click", function () {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert("Error! Not a link");
  }
});

// Alternative
// Event Bubbling

// const redirectContainer = document.getElementById("linkRedirect");
// let link;

// redirectContainer.addEventListener("click", function (event) {
//   if (event.target.id !== "enterLinkBtn" && event.target.id !== "redirectBtn") {
//     event.stopPropagation();
//   } else if (event.target.id === "enterLinkBtn") {
//     link = prompt("Enter link");
//   } else if (link && event.target.id === "redirectBtn") {
//     if (!link.startsWith("http://") && !link.startsWith("https://")) {
//       link = "https://" + link;
//     }
//     window.location.href = link;
//   } else {
//     alert("Error! Not a link");
//   }
// });




