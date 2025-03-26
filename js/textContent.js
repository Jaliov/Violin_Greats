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
