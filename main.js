document.addEventListener("DOMContentLoaded", () => {
  window.showSection = function(id) {
    document.querySelectorAll("main section").forEach(section => {
      section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  };
});
active");
}
