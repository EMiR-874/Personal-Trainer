document.querySelectorAll("article").forEach((article) => {
  article.addEventListener("click", () => {
    let openedDiv = article.querySelector(".opened");

    document.querySelectorAll(".opened").forEach((div) => {
      if (div !== openedDiv) div.classList.remove("active");
    });

    document
      .querySelectorAll(
        "article .s_image, article .c_image, article .y_image, article .h_image, article .m_image, article .p_image"
      )
      .forEach((img) => {
        img.classList.remove("border-change");
      });

    openedDiv.classList.toggle("active");

    if (openedDiv.classList.contains("active")) {
      article.querySelectorAll(".s_image, .c_image, .y_image, .h_image, .m_image, .p_image").forEach((img) => {
        img.classList.add("border-change");
      });
    } else {
      article.querySelectorAll(".s_image, .c_image, .y_image, .h_image, .m_image, .p_image").forEach((img) => {
        img.classList.remove("border-change");
      });
    }
  });
});
