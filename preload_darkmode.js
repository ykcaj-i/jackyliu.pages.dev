if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode(); 
  } 
  


  function darkMode() {
    darkModePFP();
    
    
    var element = document.body;
    element.classList.toggle("darkmodeNoTransition");
  
    var element = document.querySelector("#about");
    element.classList.toggle("darkmodemain");   
/*
    let home = document.getElementById('home');
    home.style.color = "white";
    home.style.backgroundColor = "(0, 70, 102, 0.945)";
    */
  }


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


    function darkModeTextChange(){
  let text = document.querySelector('emoji').innerHTML;
  if(text.includes("🌙")){
    text = "⭐"
    document.querySelector('emoji').innerHTML = text;
  } else {
    text = "🌙"
    document.querySelector('emoji').innerHTML = text;
  }
}




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
   
  if (h1 > 12){ //check back to see if working
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