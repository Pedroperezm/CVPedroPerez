var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}


let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
    menu.style.display = "none";
    menu_visible = false;
    }
}


function crearBarra(id_barra){
    for(i=0;i<=16;i++){
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let react = document.getElementById("react");
crearBarra(react);
let mysql = document.getElementById("mysql");
crearBarra(mysql);
let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml)
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 16, 1, intervalJavascript)
        },100);
        const intervalReact = setInterval(function(){
            pintarBarra(react, 15, 2, intervalReact)
        },100);
        const intervalMysql = setInterval(function(){
            pintarBarra(mysql, 15, 3, intervalMysql)
        },100);
        const intervalNodejs = setInterval(function(){
            pintarBarra(nodejs, 14, 4, intervalNodejs)
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 14, 5, intervalWordpress)
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#FF0000";
    }else{
        clearInterval(interval)
    }
}


window.onscroll = function(){
    efectoHabilidades();
}
