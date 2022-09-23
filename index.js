const navLink = document.querySelectorAll(".navigation__link");

const checkBox = document.querySelector(".navigation__checkbox");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    checkBox.checked = false;
  });
});
