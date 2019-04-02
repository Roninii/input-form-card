const [logIn, showRegister, goBack, register] = document.getElementsByClassName(
  "button"
);
const [card] = document.getElementsByClassName("flip-card");
logIn.addEventListener("click", submitLogIn);
goBack.addEventListener("click", toggleShowRegister);
showRegister.addEventListener("click", toggleShowRegister);
register.addEventListener("click", submitRegister);

function submitLogIn() {}
function submitRegister() {}
function toggleShowRegister() {
  card.classList.toggle("face");
}
