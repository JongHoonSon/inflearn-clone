const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  const pos = window.scrollY;

  if (pos > 103) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
