function openNav() { // Opens the nav bar
    if ( window.innerWidth <= 800 ) {
        document.getElementById("sidenav").style.width = "100vw";
    }
    else {
        document.getElementById("sidenav").style.width = "200px";
    };
    
}
  
function closeNav() { // Closes the nav bar
    document.getElementById("sidenav").style.width = "0";
  }
function blueHamburger(element) { // Changes the colour of the nav icon on hover
    element.setAttribute('src', './assets/blue hamburger.png');
}

function whiteHamburger(element) { // Changes the colour of the nav icon on hover
    element.setAttribute('src', './assets/white hamburger.png');
}

window.addEventListener('click', function(e) {  // Closes the nav bar when clicked away
    if (document.getElementById('main').contains(e.target)) {
        closeNav();
    }
});

document.addEventListener('touchstart', handleTouchStart, false);   // Records any touch on page
document.addEventListener('touchmove', handleTouchMove, false);    // Records a swipe

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {  // Opens and closes the nav bar depending on swipe
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    
    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff >= 9) { /* Swipe Left */
            closeNav();
        } else if (xDiff <= -9) { /* Swipe Right */
            openNav();
        }                       
    } else {
        if (yDiff > 0) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};