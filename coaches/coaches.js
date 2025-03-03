document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const images = document.querySelectorAll("header article");
  const buttons = [
    { img: ".gia-img", section: ".gia" },
    { img: ".lucia-img", section: ".lucia" },
    { img: ".nicolas-img", section: ".nicolas" },
  ];

  sections.forEach((sec) => sec.classList.add("hidden"));
  document.querySelector(".gia").classList.remove("hidden");

  buttons.forEach(({ img, section }) => {
    document.querySelector(img).addEventListener("click", function () {
      sections.forEach((sec) => sec.classList.add("hidden"));
      document.querySelector(section).classList.remove("hidden");

      images.forEach((image) => image.removeAttribute("id"));

      document.querySelector(img).setAttribute("id", "transparentBg");
    });
  });
});
