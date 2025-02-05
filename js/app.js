window.onload = enableTooltip();

function enableTooltip() {
  let element = document.getElementById("tt");
  new bootstrap.Tooltip(element);
}
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

document.getElementById(
  "navBar"
).innerHTML = `<nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href='index.html'><span class='text-danger'>Violin Classics!</span></a>
        <button class="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav">
            <li class="nav-item active  btnStyle">
              <a class="nav-link  text-light" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="about">About</a>
            <li class="nav-item">
              <a class="nav-link text-light" href="form.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled text-light" href="links">Info/Links</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
$(function () {
  $(".html-tooltip").tooltip();
});

$('[data-toggle="tooltip"]').tooltip({ html: true });

document.getElementById("heifetz").innerHTML = "hello";

$(".tooltip").tooltip({
  tooltipClass: "imgTooltip",
});
