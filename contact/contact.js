document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("dinamicTextarea");

  function autoResize() {
    textarea.style.height = "40px";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  textarea.addEventListener("input", autoResize);
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".input_type");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        this.classList.add("filled");
      } else {
        this.classList.remove("filled");
      }
    });
  });
});
