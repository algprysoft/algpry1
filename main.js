// Start Menu In Mobil
let menu_mobil = {
  list_mobil: document.querySelector(".menu > i"),
  lists: document.querySelector(".menu ul"),
  listsItem: document.querySelectorAll(".menu ul li"),
  menu_a: document.querySelectorAll(".menu ul li a"),
};
function showList() {
   // add Class To Ul
  menu_mobil.lists.classList.toggle("active-ul");;
  // add Class To List Item
  menu_mobil.listsItem.forEach((li) => {
    li.classList.toggle("style-li");
  });
  if (menu_mobil.list_mobil.className == "fa-solid fa-bars") {
    menu_mobil.list_mobil.className = "fa-solid fa-xmark";
    menu_mobil.list_mobil.style.color = "red";
  } else {
    menu_mobil.list_mobil.className = "fa-solid fa-bars";
    menu_mobil.list_mobil.style.color = "black";

  }
  menu_mobil.menu_a.forEach((a) => {
    a.classList.toggle("style-a");
  });
}
// End Menu In Mobil

// Start Scroll Button
let up = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 800) {
    up.classList.add("up-show");
  } else {
    up.classList.remove("up-show");
  }
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

// End Scroll Button

// Start Slider

let sliders = {
  slidImg: document.querySelectorAll(".slider-img img"),
  nextButton: document.querySelector(".slide-button .next"),
  prevButton: document.querySelector(".slide-button .prev"),
};
// Add Images To Array
let imgSlidArray = Array.from(sliders.slidImg);
// Get Counts Images
let countImg = imgSlidArray.length;
let currentImg = 0;
// Change Images
function changeImg() {
  imgSlidArray.forEach(function (img) {
    img.classList.remove("slid-active");
  });
  imgSlidArray[currentImg].classList.add("slid-active");
  currentImg = (currentImg + 1) % countImg;
}
// Previous Images
function prevImg() {
  imgSlidArray.forEach(function (img) {
    img.classList.remove("slid-active");
  });
  currentImg = (currentImg - 1 + countImg) % countImg;
  imgSlidArray[currentImg].classList.add("slid-active");
}
let Loop = setInterval(changeImg, 5000);
sliders.nextButton.addEventListener("click", changeImg);
sliders.prevButton.addEventListener("click", prevImg);
// End Sliders

// Start Questions
let questions = document.querySelectorAll(
  ".section-question .questions .question > h3"
);
questions.forEach((question) => {
  question.addEventListener("click", () => {
    let questionText = question.nextElementSibling;
    document
      .querySelectorAll(".section-question .questions .question > p")
      .forEach((p) => {
        p.classList.remove("question-active");
      });
    questionText.classList.add("question-active");
  });
});

// End Questions
window.onload = function () {
  window.scrollTo({
    top: 0,
  });
};
