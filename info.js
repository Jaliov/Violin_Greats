const stuff = "<p>Wolfgang Amadeus Mozart[n 1] (27 January 1756 – 5 December 1791), baptised as Joannes Chrysostomus Wolfgangus Theophilus Mozart,[n 2] was a prolific and influential composer of the Classical period. Despite his short life, his rapid pace of composition resulted in more than 800</p>";

const violinist1 = `<p>Henryk Szeryng (1918 - 1988) was a violinist and pedagogue. As a young boy he was trained by his mother to play piano but later decided turned to the violin. Szeryng went to Berlin to study under famed pedagogue Karl Flesch. He made his debut in Warsaw when in 1933 he performed the violin concerto of Ludwig van Beethoven with the Warsaw Philharmonic Orchestra under the baton of Bruno Walter. In the same year he played in Bucharest, Vienna, and Paris, achieving acclaim both from the audience and the critics. He gave concerts for the Allied forces in army camps and field hospitals (more than 300) during World War 2.  He has performed with the most famous orchestras and conductors across Europe, the Americas, Africa, and Asia.</p>`

const stuff3 = "<p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>"

// let buttonrow = ` <div class='col'><div class='collapse multi-collapse' id='multiCollapseExample1' data-target=stuff><div class='card card-body' > </div> </div> </div> 
// <div class='col'><div class='collapse multi-collapse' id='multiCollapseExample2'<div class='card card-body' ></div></div></div>
// <div class='col'><div class='collapse multi-collapse' id='multiCollapseExample3'><div class='card card-body' ></div></div></div>`

document.querySelector("#composer").innerHTML = stuff;
document.querySelector("#violinist").innerHTML = violinist1;
document.querySelector("#composition").innerHTML = stuff3;



export {
    stuff, violinist1, stuff3
}