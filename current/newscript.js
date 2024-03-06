

//darkmode
function myFunction0() {
    var element = document.body;
    element.classList.toggle("darkmode");
  }
//darkmode

//digital 24 hr clock
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
//digital 24 hr clock
 
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
  
 