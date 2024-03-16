const startGuideBtn = document.querySelector(".start-guide button");
const browseJobBtn = document.querySelectorAll(".browse-jobs ul li");
const clientGuideBtn = document.querySelectorAll(".client-guides ul li");
const rolesBtn = document.querySelectorAll(".roles p");
const heroBtn = document.querySelector(".hero button");
const signupBox = document.querySelectorAll(".signup-box button");
const hiddenMenu = document.querySelector(".hiddenMenu");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const header = document.querySelector("header");

const categoryLists = document.querySelector(".others ");
const showLists = document.querySelector(".show-more");

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) header.classList.add("sticky");
  else header.classList.remove("sticky");
});

menuBtn.addEventListener("click", () => {
  hiddenMenu.classList.add("active");
  document.querySelector(".app").style.display = "none";
});
closeBtn.addEventListener("click", () => {
  hiddenMenu.classList.remove("active");
  document.querySelector(".app").style.display = "block";
});

startGuideBtn.addEventListener("mouseenter", () => {
  startGuideBtn.children[0].style.color = "#fff";
});

startGuideBtn.addEventListener("mouseleave", () => {
  startGuideBtn.children[0].style.color = "var(--primary-color)";
});

showLists.addEventListener("click", () => {
  categoryLists.classList.toggle("active");
  showLists.innerHTML = categoryLists.classList.contains("active")
    ? "Show less"
    : "Show more (6)";
});

heroBtn.addEventListener(
  "click",
  () => (window.location.href = heroBtn.children[0].getAttribute("href"))
);

signupBox.forEach((btn) => navigatePage(btn));
rolesBtn.forEach((btn) => navigatePage(btn));
browseJobBtn.forEach((btn) => navigatePage(btn));
clientGuideBtn.forEach((btn) => navigatePage(btn));

function navigatePage(btn) {
  btn.addEventListener("click", () => {
    window.location.href = btn.children[0].getAttribute("href");
  });
}
