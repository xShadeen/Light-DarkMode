const slider = document.querySelector("input[type=checkbox]");
const icon = document.querySelector("i");

function modeChange(event) {
  console.log(this.checked);
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

slider.addEventListener("change", modeChange);
