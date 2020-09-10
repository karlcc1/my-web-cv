function hamburgclick() {
    document.getElementById("sidenav").classList.toggle("active");
    document.getElementById("main-body").classList.toggle("active");
}



function mqchange(x) {
    if (x.matches) { // If media query matches
      hamburgclick();
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  mqchange(x) // Call listener function at run time
  x.addListener(mqchange) // Attach listener function on state changes