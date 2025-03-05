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
      //document.querySelectorAll('name').style.backgroundImage = "url('./images/luna.jpg')";
     } else {
       img.src = isLight;
       //document.querySelectorAll('name').style.backgroundImage = "url('./images/tidalwave2.gif')";
     }
     /** 
    changeName();
     function changeName(){

     }
     */
  }

