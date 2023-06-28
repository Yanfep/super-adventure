/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  /*  function cambiarLenguaje() {
    currentLanguage == "ES"
      ? (currentlanguage = "EN")
      : (currentlanguage = "ES");
  }

  */

  let currentLanguage = "ES";

  /*let miBoton = document.querySelector("#boton");
  miBoton.innerHTML = document.createElement("button");
  */

  let miTituloEs = "Cambiando de idioma";
  let miTituloEn = "Change Language";
  let miTituloFr = `Titulo en frances`;

  let name = "Joe";
  let lastname = "Doe";

  let myTitle = document.querySelector("#title");
  myTitle.innerHTML = currentLanguage == "ES" ? miTituloEs : miTituloEn;

  let miParrafo = `Esta es la pagina de ${name} realizada para Mr. ${lastname}`;

  let miSubtitulo = "Un subtitulo para esta sección";

  let miHtml = document.querySelector("#root");
  miHtml.innerHTML = `
    <h2> ${miSubtitulo} </h2>
    <p> ${miParrafo} </p>
      `;

  console.log("Hello Rigo from the console!");
};
