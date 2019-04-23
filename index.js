let myLink = "https://kea-alt-del.dk/t5/api/productlist";
function loadData(link){
  fetch(link).then(e=>e.json()).then(data=>show(data))
}

function show(data){
  data.forEach(object=>console.log(object))
}
loadData(myLink)
