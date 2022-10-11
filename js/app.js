const header = document.getElementById("header");
const main = document.getElementById("main");

window.addEventListener("scroll", function () {
  const pos = window.scrollY;

  if (pos > 103) {
    header.classList.add("sticky");
    main.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    main.classList.remove("sticky");
  }
});
