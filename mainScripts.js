/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  
  var contentFrame = getContenFrame();
  var navbar = getNavbar();


  //Scrolling UP
  if (prevScrollpos > currentScrollPos) {
    // If we are at the top of the page, move the content frame down to display content left behind the navbar
    if (currentScrollPos == 0) {
      contentFrame.style.marginTop = "60px";
      // Hide the navbar
    } else {
      navbar.style.top = "0px";
    }

    //Scrolling DOWN
  } else {

    //get navbartoggler elements
    var navbarToggler = window.top.document.getElementsByClassName("navbar-toggler ms-auto");

    //Check if only one navbar element was found
    if (navbarToggler.length == 1) {
      navbarToggler = navbarToggler[0];

      //Check if navbar is expanded --> collapse if true
      if (navbarToggler.ariaExpanded == 'true') {
        navbarToggler.click(); 
      }
    }

    // Hide the navbar
    navbar.style.top = "-60px";
    // Move the content window to the top of the page 
    contentFrame.style.marginTop = "0px";
  }
  prevScrollpos = currentScrollPos;
}


// Used by project cards to navigate 
function getProject(target) {

  window.location = '/Project_pages/' + target + '.html';

}


//Run on iframe refresh, handles the navbar positioning
function frameLoad(){

  var contentFrame = getContenFrame();
  var navbar = getNavbar();

  contentFrame.style.marginTop = "60px";
  navbar.style.top = "0px";

}


//filter the project page elements 
function filterProjects(type){

  var projectCards = document.getElementsByClassName(type);

    for (var i = 0; i < projectCards.length; i++){
      projectCards[i].style.display = "none";
    }


}


//getter for content frame
function getContenFrame(){

  return window.top.document.getElementById("content");

}

//getter for navbar
function getNavbar(){

  return window.top.document.getElementById("navbar");

}
