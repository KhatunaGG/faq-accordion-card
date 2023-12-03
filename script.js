let arrow = Array.from(document.querySelectorAll(".item__arrow"));
let subtext = document.querySelectorAll(".subtext__box");

arrow.forEach((el) => {
  el.addEventListener("click", (e) => {
    let subtextBox = e.target.closest(".title__box").nextElementSibling;
    el.classList.toggle("active");
    let title = e.target.closest(".title__box").children[0];

    if (subtextBox.classList.contains("none")) {
      subtextBox.classList.remove("none");
      title.style.fontWeight = "700";
    } else {
      subtextBox.classList.add("none");
      title.style.fontWeight = "400";
    }
  });
});
