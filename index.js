let myLink = "https://mywpsite.kea-alt-del.dk/wp-json/wp/v2/posts?_embed";
const template = document.querySelector("template").content;
const parent = document.querySelector("main");

function loadData(link){
  fetch(link).then(e=>e.json()).then(data=>show(data))
}

function show(data){
  data.forEach(post=>{
    console.log(post)
    //clone the template
    const clone = template.cloneNode(true);

    //populate it
    const h1 = clone.querySelector("h1");
    const section = clone.querySelector("section");
    const p = clone.querySelector("p");
    h1.textContent=post.title.rendered;
    section.innerHTML=post.content.rendered;

    p.textContent=post._embedded.author[0].name;
    //append to DOM
    parent.appendChild(clone)
  })
}

loadData(myLink)
