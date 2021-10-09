/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbarFunction() {
    var x = document.getElementById("NavBar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("NavBar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}