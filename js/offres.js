document.addEventListener("DOMContentLoaded", function () {
    var boutonRetourEnHaut = document.getElementById("retour-en-haut");
  
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        boutonRetourEnHaut.style.display = "block";
      } else {
        boutonRetourEnHaut.style.display = "none";
      }
    });
  
    boutonRetourEnHaut.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });