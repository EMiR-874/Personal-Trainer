document.querySelectorAll(".icon_wrapper").forEach((wrapper) => {
  wrapper.addEventListener("click", function () {
    let allAnswers = document.querySelectorAll(".answer");
    let currentAnswer = this.closest("article").querySelector(".answer");
    let allWrappers = document.querySelectorAll(".icon_wrapper");

    allWrappers.forEach((el) => el.classList.remove("clicked"));
    allAnswers.forEach((answer) => {
      if (answer !== currentAnswer) {
        answer.style.maxHeight = null;
        answer.classList.remove("show");
      }
    });

    if (currentAnswer.classList.contains("show")) {
      currentAnswer.style.maxHeight = null;
      currentAnswer.classList.remove("show");
      this.classList.remove("clicked");
    } else {
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
      currentAnswer.classList.add("show");
      this.classList.add("clicked");
    }
  });
});
