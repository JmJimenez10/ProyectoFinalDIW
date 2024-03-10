// Get the button:
let mybutton = document.getElementById("btnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// SCROLL STOP BEFORE
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") != "#inicio") {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute("href"));

      if (targetElement && targetElement != "inicio") {
        const windowHeight = window.innerHeight; // Altura de la ventana del navegador
        const elementHeight = targetElement.offsetHeight; // Altura del elemento objetivo
        const offset = (windowHeight - elementHeight) / 2; // Calcula el desplazamiento para centrar el elemento

        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// Validations
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
