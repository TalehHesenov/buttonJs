let btns = document.querySelectorAll(".show-modal");
let btnClose = document.querySelector(".close-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let a = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
btnClose.addEventListener("click", a);
overlay.addEventListener("click", a);
document.addEventListener("keydown", function (e) {
  e.key == "Escape" ? a() : null;
 
});

