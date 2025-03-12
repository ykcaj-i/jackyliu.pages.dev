


   //digital 24 hr clock
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let h1;
    let mind;
    let isMidday;

 

    if (h > 12){ //if 13:00 - 23:00
      h1 = h - 12;
      h1 = checkTime(h1)
    } else {
      h1 = checkTime(h);
    }
     
    if (h < 12){ //check back to see if working
      isMidday = "AM ";
    }
    else { 
      isMidday = "PM";
    }
   if ((7 < h) && (h < 22)){
      mind = "🔅"; //awake
   }
   else {
      mind = "🌙"; //sleep
   }
   
    
      
   
    
    document.getElementById('txt').innerHTML =  h1 + ":" + m + ":" + s + " " + isMidday;
    document.getElementById('mind').innerHTML = mind;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) { // function to check if a number is less than 12. if > 12 than add a 0
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
    //digital 24 hr clock



  /*
    function darkModePFP(){
 
  const img = document.getElementById('profilepicture');
  const isLight = '/src/styles/images/bluewhite35.png';
  const isDark = '/src/styles/images/bluewhite36.png';

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


//darkmode
function darkMode() {
 
  //darkModeTextChange();
  darkModePFP();


  var element = document.body;
  element.classList.toggle("darkmode");

  var element = document.querySelector("#about");
  element.classList.toggle("darkmodemain");
}
  

  
 
    */