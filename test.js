// var contentDiv = document.getElementById("test");

// contentDiv.append("hello");

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  //Scrolling UP
  if (prevScrollpos > currentScrollPos) {
    console.log("test!");
    // If we are at the top of the page, move the content frame down to display content left behind the navbar
    if (currentScrollPos == 0){
        window.top.document.getElementById("content").style.marginTop = "60px";
    // Hide the navbar
    } else {
        window.top.document.getElementById("navbar").style.top = "0";
    }
  
    
  //Scrolling DOWN
  } else {

    // Hide the navbar
    window.top.document.getElementById("navbar").style.top = "-60px";
    // Move the content window to the top of the page 
    window.top.document.getElementById("content").style.marginTop = "0px";
  }
  prevScrollpos = currentScrollPos;
}


// Used by project cards to navigate 
function getProject(target){

    window.location = '/Project_pages/' + target + '.html';

}