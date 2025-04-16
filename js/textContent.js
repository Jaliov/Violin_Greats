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

// document.querySelector(".navbar-nav").style =
//   "background-color: rgba(255, 0, 0, 0.05)";

document.getElementById("navbarNavAltMarkup").style =
  "background-color:transparent;z-index:1";

const slider1 = `<img src="musicianImages/Portrait_du_Violoniste_Paganini_(1819)_-_Jean_A.D._Ingres.png" title="Paganini" />
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
            <img src="musicianImages/heifetz.jpg" id="heifetz" />
            <!--</marquee> -->`;
const slider2 = `  <img src="musicianImages/Portrait_du_Violoniste_Paganini_(1819)_-_Jean_A.D._Ingres.png" title="Paganini" />
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
            <img src="musicianImages/heifetz.jpg" id="heifetz" />
            <!--</marquee> -->`;

document.getElementById("slider1").innerHTML = slider1;
document.getElementById("slider2").innerHTML = slider2;
