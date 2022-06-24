fetch("./media/proyects.json")
  .then(response => response.json())
  .then(json => {draw(json)})
  .catch(err => {
    document.getElementById("proyectTitle").innerHTML = "ERROR:"
    document.getElementById("proyectText").innerHTML = "Hubo un error al cargar los proyectos"
    console.log(err)
  })

let data, buttons

function draw(projects){
  data = projects;
  document.getElementById("col-p2").innerHTML = "";
  projects.forEach((project, index) => {
    document.getElementById("col-p2").innerHTML += '<img class="buttonportfolio" id="BProyecto' + index +'" src="' + project.logo + '"alt="' + project.title + '"button></img>';
  });
  fill(0)

buttons = document.getElementsByClassName("buttonportfolio")
for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", function(){fill(index)}, false);
}
}  
function fill(index){
  try {document.getElementsByClassName("bActive")[0].className = "buttonportfolio"}catch{}
  document.getElementById("BProyecto"+index).classList += " bActive"
  document.getElementById("proyectWeb").src = data[index].imgWeb
  document.getElementById("proyectMobile").src = data[index].imgMobile
  document.getElementById("proyectTitle").innerHTML = data[index].title
  document.getElementById("proyectText").innerHTML = data[index].desc
  let link = document.getElementById("projectLink")
  if(data[index].link != ""){link.href = data[index].link; link.style.display = "block"}
  else link.style.display = "none";
}

function showmodal(index){
  url = document.getElementById("img"+index).style.backgroundImage.split('"')[1];
  document.getElementById("imgmodal").src = url
  document.getElementById("myModal").style.display = "block"
}


function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

//events

let closeB = document.getElementsByClassName("close")
for (let index = 0; index < closeB.length; index++) {
  closeB[index].addEventListener("click", function(){closeModal()}, false);
}

let photos = document.getElementsByClassName("photo")
for (let index = 0; index < photos.length; index++) {
  photos[index].addEventListener("click", function(){showmodal(index)}, false);
}

document.getElementById("ButtonWeb").addEventListener("click", function(){
  document.getElementById('DiseñoWeb').scrollIntoView({behavior: 'smooth'}
  )},false)

document.getElementById("ButtonRedes").addEventListener("click", function(){
  document.getElementById('Redes').scrollIntoView({behavior: 'smooth'}
  )},false)
  
document.getElementById("ButtonFotografia").addEventListener("click", function(){
  document.getElementById('Fotografia').scrollIntoView({behavior: 'smooth'}
  )},false)

document.getElementById("ButtonContacto").addEventListener("click", function(){
  document.getElementById('Contacto').scrollIntoView({behavior: 'smooth'}
  )},false)