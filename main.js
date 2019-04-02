const [logIn, showRegister, goBack, register] = document.getElementsByClassName(
  "button"
);
const [cube] = document.getElementsByClassName("cube");
logIn.addEventListener("click", submitLogIn);
goBack.addEventListener("click", toggleShowRegister);
showRegister.addEventListener("click", toggleShowRegister);
register.addEventListener("click", submitRegister);

function submitLogIn() {}
function submitRegister() {}
function toggleShowRegister() {
  cube.classList.toggle("show-top");
}
