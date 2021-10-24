
let serviceButton = document.getElementsByClassName("service-button");

for (i = 0; i < serviceButton.length; i++) {
  serviceButton[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    if (panel.style.opacity === "1") {
      panel.style.opacity = "0";
    } else {
      panel.style.opacity = "1";
    }
  });
}