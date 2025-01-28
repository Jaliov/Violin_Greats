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

// document.addEventListener("mouseover", intro).style =
//   "color:white;z-index:1000;";

// function showTitle() {
//   document.querySelectorAll(".card-image").innerHTML = "Test content";
// }

// function on() {
//   document.querySelector(".intro").style.display = "inline-block";
// }

function off() {
  document.querySelector(".intro").style.display = "none";
}

// document.getElementById(
//   "multiCollapseExample7"
// ).innerHTML = `<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam  eos</p>.`;

// const scrollers = document.querySelector(".scroller");

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     scroller.setAttribute("data-animated", true);
//   });
// }

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
              <a class="nav-link text-light" href="contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled text-light" href="links">Info/Links</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;

// document.getElementById(
//   "Soloist1"
// ).innerHTML = `<p>Henryk Szeryng (1918 - 1988) was a violinist and pedagogue. As a young boy he was trained by his mother to play piano but later decided turned to the violin. Szeryng went to Berlin to study under famed pedagogue Karl Flesch. He made his debut in Warsaw when in 1933 he performed the violin concerto of Ludwig van Beethoven with the Warsaw Philharmonic Orchestra under the baton of Bruno Walter. In the same year he played in Bucharest, Vienna, and Paris, achieving acclaim both from the audience and the critics.</p> `;

// document.getElementById(
//   "Composer1"
// ).innerHTML = `<p>Antonio Vivaldi (1678 - 1741) was one of the most productive composers of the Baroque era. His vast output included substantial quantities of chamber and vocal music, some 46 operas and a remarkable 500 concertos.</p>`;

// document.getElementById(
//   "Soloist2"
// ).innerHTML = `Kyung Wha Chung, born in 1948, is a famous South Korean violinist. She began studying the violin at age 4 and became recognized as a child prodigy. At age 9 she made her debut with the Seoul Philharmonic Orchestra, playing the Mendelssohn Violin Concerto! `;
