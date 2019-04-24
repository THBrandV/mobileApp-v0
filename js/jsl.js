/**
 * Created by master on 01.03.16.
 */

// Funktion ini... erzeugen
function initialiseView() {

    // ------ Variablen zuordnen ------ //

    var main = document.querySelector("main");
    //var refresh = document.querySelector("footer .refresh");

    var viewswitch = document.querySelector("header .listen");
    var ansicht = document.getElementById("switch");

    // Kachel als erstes
    var kachel = true;

/*
    refresh.onclick = () =>  {
        main.classList.toggle("faded");

        main.addEventListener("transitionend",ontransitionend);
    }; */

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
            ansicht.classList.replace("kachel","listen");
            // setzen kachel true
            kachel = true;
        } else {
            // ansonsten tauschen
            ansicht.classList.replace("listen","kachel");
            // und kachelkachel auf false setzen
            kachel = false;
        }

        main.classList.toggle("faded");
        main.removeEventListener("transitionend", ontransitionend);

    }

}

window.onload = initialiseView;