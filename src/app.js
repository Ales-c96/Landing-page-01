document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelectorAll(".dropdown-btn");
  const menuBtn = document.getElementById("botonMenu");
  const menu = document.getElementById("menuMovil");

  // Menu mobile functionality
  menuBtn.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      setTimeout(() => {
        menu.classList.remove("opacity-0");
        menu.classList.add("opacity-1");
      }, 100);
    } else {
      menu.classList.remove("opacity-1");
      menu.classList.add("opacity-0");
      setTimeout(() => {
        menu.classList.add("hidden");
      }, 100);
    }
  });

  // Drop down sections functionaliti
  dropdownBtn.forEach((element) => {
    element.addEventListener("click", () => {
      const dropdown = element.querySelector(".dropdown");
      dropdown.classList.toggle("hidden");
    });
  });

  //Light/Dark mode
  let getTheme = localStorage.getItem("theme") === "dark" ? true : false;
  const watchTheme = (val) => {
    let theme = val ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  const themeSelector = document.querySelector(".themeSelector");
  themeSelector.innerHTML = `Mode: ${localStorage.getItem("theme")}`;
  watchTheme(getTheme);

  themeSelector.addEventListener("click", function () {
    getTheme = localStorage.getItem("theme") === "light" ? true : false;
    watchTheme(getTheme);
    themeSelector.innerHTML = `Mode: ${localStorage.getItem("theme")}`;
  });

  //Universal smooth scroll
  // Añade un eventListener a todos los enlaces de anclaje que tengan un href que comience con #
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    });
  });
});
