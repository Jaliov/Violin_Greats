import { stuff, violinist1, stuff3, buttonrow } from '/info.js';
console.log(stuff3);

document.querySelector("#clip1").src =
"https://www.youtube.com/embed/hB5SSbn0xLo";

  let row = document.querySelector("#dunce");
  row.innerHTML  = buttonrow;

  document.querySelector('.btntech').innerHTML = ` <p>
  <button class="btn btn-dark" type="button" data-toggle="collapse"
      data-target="#multiCollapseExample1" aria-expanded="false"
      aria-controls="multiCollapseExample1" data target = '#dunce''>Composer</button>

  <button class="btn btn-dark" type="button" data-toggle="collapse"
      data-target="#multiCollapseExample2" aria-expanded="false"
      aria-controls="multiCollapseExample2">Violinist</button>

  <button class="btn btn-dark" type="button" data-toggle="collapse"
      data-target="#multiCollapseExample3" aria-expanded="false"
      aria-controls="multiCollapseExample3">Toggle second element</button>
</p>`
 
 document.querySelector("#multiCollapseExample1").innerHTML = stuff;
document.querySelector("#multiCollapseExample2").innerHTML = violinist1;
document.querySelector("#multiCollapseExample3").innerHTML = stuff3;

jQuery('button').click( function(e) {
  jQuery('.collapse').collapse('hide');
});