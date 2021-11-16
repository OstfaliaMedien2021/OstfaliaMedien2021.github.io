const pixelsTag = document.querySelector('div.pixels');
const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');
const headerTag = document.querySelector('header');

let ToggleImg = true;

document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset;
  pixelsTag.innerHTML = pixels;
  
  const pageHeight = bodyTag.getBoundingClientRect().height;
  // gBCR erzeugt ein Objekt mit den Maßen der Seite
  // wirwollen den value des keys height
 
  const totalScrollableDistance = pageHeight - window.innerHeight;
  // windows ist auch ein Objekt mit den Werten des Fensters
  
  const percentage = pixels / totalScrollableDistance;
  
  progressTag.style.width = `${100 * percentage}%`
  // Backticks weil: Variablen-Schreibweise
  console.log(percentage * 100);

  let quoteWobble = document.getElementById('quote-wobble');
  let quoteWobble2 = document.getElementById('quote-wobble2');

  if (percentage * 100 >= 6  && percentage * 100 <= 18) {
    quoteWobble.classList.remove('hide');
    quoteWobble.classList.add('show');
  }
  else {
    quoteWobble.classList.remove('show');
    quoteWobble.classList.add('hide');
  }

  if (percentage * 100 >= 65 && percentage * 100 <= 75) {
    quoteWobble2.classList.remove('transout');
    quoteWobble2.classList.add('transin');
  }
  else {
    quoteWobble2.classList.remove('transin');
    quoteWobble2.classList.add('transout');
  }

});

document.getElementById("sun").addEventListener("click", toggleDarkmode);
document.getElementById("moon").addEventListener("click", toggleDarkmode);

function toggleDarkmode() {
  bodyTag.classList.toggle("dark-mode");
  progressTag.classList.toggle("dark-mode");
  headerTag.classList.toggle("dark-mode");

  if (ToggleImg == false) {
    document.getElementById("sun").style.display = "block";
    document.getElementById("moon").style.display = "none";
    ToggleImg = true;
  }
  else {
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
    ToggleImg = false;
  }
}

console.log(pixelsTag);
