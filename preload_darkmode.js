if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
   
    
  } 
  


  function darkMode() {
    darkModePFP();
  
    var element = document.body;
    element.classList.toggle("darkmode");
  
    var element = document.querySelector("#about");
    element.classList.toggle("darkmodemain");
  
    
  
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