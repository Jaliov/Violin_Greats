// document.getElementById(
//   "Mozart"
// ).innerHTML = ` <p><span class="text-light">Wolfgangus Theophilus Mozart </span>(1756 - 1791) was
//                             arguably
//                             the most gifted musician in the history of classical music. Born in Salzburg, he was
//                             already considered a genius as a child. He made his first attempts at composition at
//                             the
//                             tender age of six. His
//                             inspiration is often described as "divine", but he worked assiduously, not only to
//                             become the great composer he was, but also a conductor, virtuoso pianist, organist
//                             and
//                             violinist. The music of Mozart embraces opera, symphony, concerto, chamber, choral,
//                             instrumental and vocal music, revealing an astonishing number of imperishable
//                             masterpieces.</p>`;
// $(function () {
//   $(".html-tooltip").tooltip();
// });

document.getElementById(
  "navLoad"
).innerHTML = `<nav class="navbar navbar-expand-lg navbar-light nav ">
            <div class="container-fluid">
                <a class="navbar-brand text-danger" href="index.html"><img src="favicon.ico" id="favicon"
                        alt="violin favicon"></a>
                <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link text-light" aria-current="page" href="index.html">Home</a>
                        <a class="nav-link text-light" href="about.html">About</a>
                        <a class="nav-link text-light" href="form.html">Contact</a>

                    </div>
                </div>
            </div>
        </nav>`;

let block1 = `  <img src="musicianImages/Portrait_du_Violoniste_Paganini_(1819)_-_Jean_A.D._Ingres.png" title="Paganini" />
            <img src="musicianImages/Bach.jpg" title="Bach" />
            <img src="musicianImages/itzhak-perlman.jpg">
            <img src="musicianImages/Jean_Sibelius,_1913.jpg" title="Sibelius" />
            <img src="musicianImages/ferras.jpg" />
            <img src="musicianImages/Mozart.jpg" title="Mozart" />
            <img src="musicianImages/Hadelich_logo.jpg" />
            <img src="musicianImages/kychung.jpg" />
            <img src="musicianImages/Johannes_Brahms_portrait.jpg" title="Brahms" />
            <img src="musicianImages/loomis-dean-violinists-david-oistrakh-and-yehudi-menuhin.jpg" />
            <img src="musicianImages/Vivaldi.jpg" title="Vivaldi" />
            <img src="musicianImages/Hahn.jpg" />
            <img src="musicianImages/Mendelssohn.jpg" title="Mendelssohn" />
            <img src="musicianImages/Midori.jpg" />
            <img src="musicianImages/milstein.jpg" />
            <img src="musicianImages/Paganini.jpg" title="Paganini" />
            <img src="musicianImages/Szeryng_featured.jpg" />
            <img src="musicianImages/Tchaikovsky.jpg" title="Tchaikovsky" />
            <img src="musicianImages/mutter.jpg" />
            <img src="musicianImages/Beethoven.jpg" title="Beethoven" />
            <img src="musicianImages/heifetz.jpg" id="heifetz"  style ="margin-right:0;padding-right:0;"/>`;

let block2 = block1;
document.getElementById("navbarNavAltMarkup").style =
  "background-color:transparent;z-index:1";

function navLoad() {
  document.querySelector(".logos-slide").innerHTML = block1;
  document.querySelector(".logos-slide2").innerHTML = block2;
}

navLoad();
