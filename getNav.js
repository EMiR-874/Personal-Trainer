document.addEventListener("DOMContentLoaded", function () {
  fetch("../../../navigation/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-container").innerHTML = data;

      const scripts = document.getElementById("nav-container").querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
      });

      setupDropdown();
    })
    .catch((error) => console.error("Error loading nav:", error));

  fetch("../../../navigation/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});
