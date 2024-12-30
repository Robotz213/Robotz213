document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

    document.querySelectorAll(".bg-white, .text-dark").forEach((element) => {
      element.classList.toggle("bg-white");
      element.classList.toggle("bg-dark");
      element.classList.toggle("text-dark");
      element.classList.toggle("text-white");
    });

    document.querySelectorAll(".navbar").forEach((navbar) => {
      navbar.classList.toggle("navbar-light");
      navbar.classList.toggle("navbar-dark");
      navbar.classList.toggle("bg-light");
      navbar.classList.toggle("bg-dark");
    });

    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.toggle("btn-light");
      btn.classList.toggle("btn-dark");
    });
  });
});
