const buttonBut = document.querySelector(".but");
const buttonOni = document.querySelector(".oni");

function addHover() {
  buttonBut.classList.add("hover");
  buttonOni.classList.add("hover");
}

function removeHover() {
  buttonBut.classList.remove("hover");
  buttonOni.classList.remove("hover");
}

buttonBut.addEventListener("mouseover", addHover);
buttonBut.addEventListener("mouseout", removeHover);
buttonOni.addEventListener("mouseover", addHover);
buttonOni.addEventListener("mouseout", removeHover);

// es chatgpt-m damiwera simartle ro vtkvat