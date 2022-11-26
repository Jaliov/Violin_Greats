const stuff = "<p>Wolfgang Amadeus Mozart[n 1] (27 January 1756 – 5 December 1791), baptised as Joannes Chrysostomus Wolfgangus Theophilus Mozart,[n 2] was a prolific and influential composer of the Classical period. Despite his short life, his rapid pace of composition resulted in more than 800</p>";

const violinist1 = `<p>Henryk Szeryng (1918 - 1988) was a violinist and pedagogue. As a young boy he was trained by his mother to play piano but later decided turned to the violin. Szeryng went to Berlin to study under famed pedagogue Karl Flesch. He made his debut in Warsaw when in 1933 he performed the violin concerto of Ludwig van Beethoven with the Warsaw Philharmonic Orchestra under the baton of Bruno Walter. In the same year he played in Bucharest, Vienna, and Paris, achieving acclaim both from the audience and the critics. He gave concerts for the Allied forces in army camps and field hospitals (more than 300) during World War 2.  He has performed with the most famous orchestras and conductors across Europe, the Americas, Africa, and Asia.</p>`

const stuff3 = "<p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>"

const composer2 = `<p>lLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo iure consectetur exercitationem atque aspernatur harum consequatur ex corporis et? </p>`

const violinist2 = `<p>lores. Architecto facere neque incidunt placeat ea cupiditate expedita eveniet laudantium deleniti, vero ratione dolor. Corrupti, assumenda recusandae ipsum blanditiis voluptas voluptate?</p>`

const stuff2 = `<p>Ut totam optio qui sunt itaque rem dolor aliquam qui aspernatur corrupti sed similique odit et earum quod est atque ullam! Hic dolores accusamus et debitis perferendis in harum voluptatem aut dolorem aliquam. Qui asperiores voluptatum eum fuga amet aut dignissimos enim sed aperiam voluptas.</p>`

let slat  = "document.querySelector"

document.querySelector("#composer").innerHTML = stuff;
document.querySelector("#violinist").innerHTML = violinist1;
document.querySelector("#composition").innerHTML = stuff3;

document.querySelector("#composer2").innerHTML = composer2;
document.querySelector("#violinist2").innerHTML = violinist2;
document.querySelector("#composition2").innerHTML = stuff2;

document.querySelector("#composer3").innerHTML = `<p>Well howdy you all.</p>`;
document.querySelector("#violinist3").innerHTML = `<p>violinist2 is n ot the content here blubby</P>`;
document.querySelector("#composition3").innerHTML = "<p>dummy text, dummy, OING SUPLOUDFDFDFDFDFDF</p>";

export {
    stuff, violinist1, stuff3
}
