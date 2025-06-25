//var sideNavigator = document.getElementById("sideNavigationBase");
var displayState = 0;

function sideNav()
{
  var sideNavigator = document.getElementById("sideNavigationBase");
  if(displayState == 1)
  {
    sideNavigator.style.width = "0px";
    displayState = 0;
  }
  else
  {
    sideNavigator.style.width = "410px";
    displayState = 1;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const sideNavigationBase = document.getElementById('sideNavigationBase');
  const navBarFrame = document.getElementById('navBarFrame');

  // Function to handle messages from the iframe
  window.addEventListener('message', function(event) {
    if (event.data === 'closeNavBar') {
      sideNav();
    }
  });
});
