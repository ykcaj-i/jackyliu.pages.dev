/** 
document.getElementById('preventAnchor').addEventListener('click', function(e){
  e.preventDefault();
  var anchor = this.href.split('#')[1];
  document.body.scrollTop = document.getElementById(anchor).offsetTop; // Comment me out if you don't want scroll to occur
})
   
*/

function darkModePFP(){
 
  const img = document.getElementById('profilepicture');
  const isLight = 'images/bluewhite35.png';
  const isDark = 'images/bluewhite36.png';

  if (img.src.endsWith(isLight)){ //is this true?
   img.src = isDark;
   //document.querySelectorAll('name').style.backgroundImage = "url('./images/luna.jpg')";
  } else {
    img.src = isLight;
    //document.querySelectorAll('name').style.backgroundImage = "url('./images/tidalwave2.gif')";
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
 
  darkModeTextChange();
  darkModePFP();


  var element = document.body;
  element.classList.toggle("darkmode");

  var element = document.querySelector("#about");
  element.classList.toggle("darkmodemain");
}
  

  
 


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
     
    if (h < 12){ //check back to see if working
      isMidday = "AM";
    }
    else { 
      isMidday = "PM";
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


/*

function handleShortcut(event) {
  if (event.key === "home") {
      event.preventDefault();
      // Your action to perform when the key is pressed
  }
}
document.addEventListener("keydown", handleShortcut);

*/