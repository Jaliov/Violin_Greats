window.onload = enableTooltip();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".hidden, .collapseBtnsStyling"
);

hiddenElements.forEach((el) => observer.observe(el));

function off() {
  document.querySelector(".intro").style.display = "none";
}

$(function () {
  $(".html-tooltip").tooltip();
});

$('[data-toggle="tooltip"]').tooltip({ html: true });

document.getElementById("heifetz").innerHTML = "hello";

$(".tooltip").tooltip({
  tooltipClass: "imgTooltip",
});
