const [submit, register] = document.getElementsByClassName("button");
const [cube] = document.getElementsByClassName("cube");
submit.addEventListener("click", logIn);
register.addEventListener("click", showRegister);

function logIn() {}
function showRegister() {
  cube.classList.toggle("show-top");
}
