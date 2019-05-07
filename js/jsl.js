/**
 * Created by master on 01.03.16.
 */

// Funktion ini... erzeugen
function initialiseView() {

    // ------ Variablen zuordnen ------ //
    // var header = document.getElementsByTagName("header") [0];
    var main = document.querySelector("main");
    var refresh = document.querySelector("footer .refresh");

    var viewswitch = document.querySelector("header .listen");
    var ansicht = document.querySelector("switch");
    var ul = main.getElementsByTagName("ul")[0];
    var add = document.querySelector("header .add");
    var option = document.querySelector("main li .option");
    // Kachel als erstes
    var kachel = true;



    option.onclick = (evt) => {
        alert("Option");

    }

        refresh.onclick = () =>  {
            location.reload();
        };

    // Umschalten onclick auf Listensymbaol
    viewswitch.onclick = () => {

        //Objekte ausblenden
        main.classList.toggle("faded");
        // nach transitionend -> ontransitionend aufrufen
        main.addEventListener("transitionend", ontransitionend);
    };


    // ------- FUNKTION ontransitionend ------ //
    function ontransitionend() {


        document.body.classList.toggle("tiles");
        // if-Anweisung überprüfen ob Kachel  gesetzt
        if (kachel == false) {
            //wenn nicht gesetzt, dann ersetzen mit Liste
            ansicht.classList.replace("kachel", "listen");
            // setzen kachel true
            kachel = true;
        } else {
            // ansonsten tauschen
            ansicht.classList.replace("listen", "kachel");
            // und kachelkachel auf false setzen
            kachel = false;
        }

        main.classList.toggle("faded");
        main.removeEventListener("transitionend", ontransitionend);


    }

    //list item selection
  /*  var litems = main.getElementsByTagName("li");

    for (var i = 0; i < litems.length; i++) {

        let currentli = litems[i];
        // kann weg -> evt
        currentli.onclick = (evt) => {
            // kann weg ->  + ", click on: " + evt.target
            alert("Liste" + getLiTitle(currentli) + ", click on: " + evt.target);
        }
    }
*/

  /* var litems = main.querySelectorAll("li");
  litems.forEach(currentli => {
      currentli.onclick = (evt) =>{
        alert("Select: " + getLiTitle(currentli) + ", click on: " + evt.target);
      }
      });
*/

  ul.onclick = (evt) => {
      var currentli = getCurrentli(evt.target);
      alert("Click event on: " + getLiTitle(currentli) + ", Click event on: " + evt.target);
  }

  function getCurrentli(el){
      if (el.tagName == "LI"){
          return el;
      } else if (el.tagName == "UL"){
          alert("übers Ziel hinaus");
      }
      else if (el.parentNode){
          return getCurrentli(el.parentNode);
      }
      else {
          alert("irgendwas ist schief gegangen!");
      }
    }


    function getLiTitle(li){
        return li.getElementsByTagName("h3")[0].textContent;
    }


    ul.onclick = (evt) => {
        var currentli = getCurrentli(evt.target);
        alert("Click event on: " + getLiTitle(currentli) + ", Click event on: " + evt.target);
    }

    function getCurrentli(el){
        if (el.tagName == "LI"){
            return el;
        } else if (el.tagName == "UL"){
            alert("übers Ziel hinaus");
        }
        else if (el.parentNode){
            return getCurrentli(el.parentNode);
        }
        else {
            alert("irgendwas ist schief gegangen!");
        }
    }


    function getLiTitle(li){
        return li.getElementsByTagName("h3")[0].textContent;
    }



    //addButton - AddElement
    add.onclick = (evt) => {
      alert("add new element");
      addLiElement({title: "Neues Element" + Date.now(),src:"https://placeimg.com/100/100"})
    }

    function addLiElement(obj){
      alert("füge neues element für: " + JSON.stringify(obj));
    }


}
window.onload = initialiseView;