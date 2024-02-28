function myFunction0() {
    var element = document.body;
    element.classList.toggle("darkmode");
  }
  
  function myFunction1() {
    var element = document.div;
    element.classList.toggle("gradientchange");
  }
  
  
  
  
  function myFunction2() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  
  window.onscroll = function() {myFunction2()};
  
  var navbar = document.getElementById("tree");
  var sticky = navbar.offsetTop;
  
  
  
  
  
  