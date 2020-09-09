function hamburgclick() {
    document.getElementById("sidenav").classList.toggle("active");
    document.getElementById("main-body").classList.toggle("active");
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      hamburgclick();
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes