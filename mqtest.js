function mqtest(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  mqtest(x) // Call listener function at run time
  x.addListener(mqtest) // Attach listener function on state changes