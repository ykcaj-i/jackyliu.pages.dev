

//darkmode
function darkMode() {
  var element = document.body;
  element.classList.toggle("darkmode");

  var element = document.querySelector("#about");
  element.classList.toggle("darkmodemain");


  
 }

   
  //var element = document.querySelectorAll("#lol");
  //this.classList.toggle("darkmodefonts");
  



// document.getElementById("maincontentstyle").style.boxShadow = "0 0 80px 10px  rgb(206, 255, 251)";
//document.getElementById("maincontentstyle").style.backgroundImage = "linear-gradient(to bottom, rgb(245, 254, 255), rgb(238, 255, 254), rgb(230, 255, 253), rgb(170, 255, 248), rgb(187, 255, 249))";
//background-image: linear-gradient(to bottom, rgb(245, 254, 255), rgb(238, 255, 254), rgb(230, 255, 253), rgb(170, 255, 248), rgb(187, 255, 249));
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


    const d = new Date();
    document.getElementById('dte').innerHTML =  d;
  

