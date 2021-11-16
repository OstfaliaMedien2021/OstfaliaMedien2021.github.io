const pixelsTag = document.querySelector('div.pixels');
const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');
const headerTag = document.querySelector('header');
const sidebarTag = document.querySelector('.sidebar');
var lastScrollTop = 0;
let ToggleImg = true;

// Update des Pixel-Tags bei Scroll
// und damit Scrollbar ändern
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


  let quoteWobble = document.getElementById('quote-wobble');
  const quoteWobble2 = document.querySelector('.box-caption2');
  let toTop = document.getElementById('toTop');

  if (percentage * 100 >= 6  && percentage * 100 <= 12) {
    quoteWobble.classList.remove('hide');
    quoteWobble.classList.add('show');
  }
  else {
    quoteWobble.classList.remove('show');
    quoteWobble.classList.add('hide');
  }

  quoteWobble2.style.left =  -65 + (((((((percentage *10 / 6 ) - 1) * 100)  + 65)/( 5 +65) * (1 - 0) + 0)*10) - 9) * 40  +"%";

  if (percentage * 100 >= 90) {
    toTop.classList.remove('hide');
    toTop.classList.add('show');
  }
  else {
    toTop.classList.remove('show');
    toTop.classList.add('hide');
  }
});

document.getElementById("fullscreen").addEventListener("click", OnClickToggleFullScreen);
document.getElementById("sun").addEventListener("click", toggleDarkmode);
document.getElementById("moon").addEventListener("click", toggleDarkmode);
document.getElementById("navbar").addEventListener("click", openNav);
document.getElementById("closebtn").addEventListener("click", closeNav);
document.getElementById("toTop").addEventListener("click", scrollTop);

function toggleDarkmode() {
  bodyTag.classList.toggle("dark-mode");
  progressTag.classList.toggle("dark-mode");
  headerTag.classList.toggle("dark-mode");
  sidebarTag.classList.toggle("dark-mode");

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

function openNav() {
  document.getElementById("navbar").style.display = "none";
  document.getElementById("closebtn").style.display = "block";
  document.body.style.width = "100% - 250px"
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() {
  document.getElementById("navbar").style.display = "block";
  document.getElementById("closebtn").style.display = "none";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

}

function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function OnClickToggleFullScreen() {
  toggleFullscreen();
}

function scrollTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	  });
}