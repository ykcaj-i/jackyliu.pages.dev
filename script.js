
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
}); // to prevent hashtags


   


function darkModePFP(){
  const img = document.getElementById('profilepicture');
  const isLight = 'images/bluewhite35.png';
  const isDark = 'images/bluewhite36.png';

  if (img.src.endsWith(isLight)){ //is this true?
   img.src = isDark;
  } else {
    img.src = isLight;
  }
 

}
/*
function textToDark(){
  const text = document.querySelector('para1');
  const textLight = document.querySelector('para1').style.color;
  const textDark = document.querySelector('para1').style.color = "yellow";
  
  if (text.color){ //is this true?
    text.color = textDark;
   } else {
    text.color = textLight;
   }
}
   */

//darkmode
function darkMode() {
  darkModePFP();

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
    let h1;
    let temp;
    let isMidday;

    if (h > 12){ //if 13:00 - 23:00
      h1 = h - 12;
      h1 = checkTime(h1)
    } else {
      h1 = checkTime(h);
    }
     
    if (h > 12){
      isMidday = "PM";
    }
    else { 
      isMidday = "AM";
    }
   
   
    
      
   

    document.getElementById('txt').innerHTML =  h1 + ":" + m + ":" + s + " " + isMidday;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) { // function to check if a number is less than 12. if > 12 than add a 0
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
    //digital 24 hr clock

/*
    let d = new Date();
    document.getElementById('dte').innerHTML =  d;
  

*/ 

function copyLink() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

}