function PortfolioButton(button) {

  var p1 = document.getElementById("Proyecto1");
  var b1 = document.getElementById("BProyecto1");
  var p2 = document.getElementById("Proyecto2");
  var b2 = document.getElementById("BProyecto2");
  var p3 = document.getElementById("Proyecto3");
  var b3 = document.getElementById("BProyecto3");

  switch (button) {
    case 1:
      if (b1.className === "buttonportfolio") {
        p1.className += " pActive";
        b1.className += " bActive";
        p2.className = "Proyectscreen";
        b2.className = "buttonportfolio"
        p3.className = "Proyectscreen";
        b3.className = "buttonportfolio"
        }
        else {}
      break;

    case 2:
      if (b2.className === "buttonportfolio") {
        p2.className += " pActive";
        b2.className += " bActive";
        p1.className = "Proyectscreen";
        b1.className = "buttonportfolio"
        p3.className = "Proyectscreen";
        b3.className = "buttonportfolio"
        }
      else {}
      break;

    case 3:
      if (b3.className === "buttonportfolio") {
        p3.className += " pActive";
        b3.className += " bActive";
        p2.className = "Proyectscreen";
        b2.className = "buttonportfolio"
        p1.className = "Proyectscreen";
        b1.className = "buttonportfolio"
        }
      else {}
      break;

    default:

      break
   }
 }
