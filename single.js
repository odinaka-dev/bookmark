// for the navigation styling
const menuBtn = document.querySelector(".menu");
const menuClose = document.querySelector(".close-items");
const menuAll = document.querySelector(".nav-item");

if (!menuAll.classList.contains("add")) {
  menuBtn.addEventListener("click", () => {
    menuAll.classList.add("add");
  });
}

menuClose.addEventListener("click", () => {
  menuAll.classList.remove("add");
});
// using html templates to add the second and third section to the section
// const slidesTemp = [];

const slideBtn = document.querySelectorAll(".slidess-button");
const firstBtn = document.querySelectorAll(".mySlides");

slideBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("slide-active");
  });
});

slideBtn[0].addEventListener("click", () => {
  firstBtn[0].style.display = "flex";
  firstBtn[1].style.display = "none";
  firstBtn[2].style.display = "none";
});

slideBtn[1].addEventListener("click", () => {
  firstBtn[0].style.display = "none";
  firstBtn[1].style.display = "flex";
  firstBtn[2].style.display = "none";
});

slideBtn[2].addEventListener("click", () => {
  firstBtn[0].style.display = "none";
  firstBtn[1].style.display = "none";
  firstBtn[2].style.display = "flex";
});

// the mobile responsive click events
slideBtn[3].addEventListener("click", () => {
  firstBtn[0].style.display = "flex";
  firstBtn[1].style.display = "none";
  firstBtn[2].style.display = "none";
});

slideBtn[4].addEventListener("click", () => {
  firstBtn[0].style.display = "none";
  firstBtn[1].style.display = "flex";
  firstBtn[2].style.display = "none";
});

slideBtn[5].addEventListener("click", () => {
  firstBtn[0].style.display = "none";
  firstBtn[1].style.display = "none";
  firstBtn[2].style.display = "flex";
});

// using regex pattern for the email check at the sub footer section
const Form = document.querySelector(".sub-form");
const EmailInp = document.querySelector("#emailcom")
const error = document.querySelector(".svg-error");
const AllError = document.querySelector(".inp-email");
const errorMessage = document.querySelector(".error-message");


Form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!EmailInp.value.includes("@gmail.com")) {
    return errorFunc();
  } else {
    return validFunc();
  }
});

const errorFunc = () => {
  error.style.display = "flex";
  errorMessage.style.display = "block";
  AllError.style.outline = "1px solid hsl(0, 94%, 66%)";
}

const validFunc = () => {
  error.style.display = "none";
  AllError.style.outline = "none";
  errorMessage.style.display = "none";
}
