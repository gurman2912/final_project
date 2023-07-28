menu = document.getElementsByClassName("menu");
nav = document.getElementsByClassName("ul");
menu.addEventListener("click", function () {
     if (nav.style.display == "none") {
          nav.style.display = "block";
     } else {
          nav.style.display = "none";
     }
});
