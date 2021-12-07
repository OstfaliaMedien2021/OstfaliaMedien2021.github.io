// Länge des Strokes definieren und css aktualisieren
Array.from(document.getElementsByClassName("path")).forEach(pathElement => {
  document.getElementById("linelength").innerHTML = "Linien Länge:" + pathElement.getTotalLength();
  pathElement.setAttribute('style', 'stroke-dasharray:' + pathElement.getTotalLength() + ';stroke-dashoffset:' + pathElement.getTotalLength())
  console.log(pathElement.style.strokeDashoffset);
})

// JQuery
$(document).ready(function () {
  //Länge der Linie verwendet in Relation zu page Lange
  var $dashOffset = $(".path").css("stroke-dashoffset");
  $(window).scroll(function () {
    // Aktuelle Scrollpos in relation zur ganzen Seite (prozent)
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //Offset pixel wert in Int umrechnen
    var $newUnit = parseInt($dashOffset, 10);
    //offset und linie sind identisch
    var $offsetUnit = $percentageComplete * ($newUnit / 100);
    //neuer Wert im offset hinzufügen
    $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });
});