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

function onBtnClickHandle(youtubeaddr) {
  setTimeout(function () {
    window.location = youtubeaddr;
  }, 3000);
}
document.querySelector(".intro").textContent = "Hey buddy";
