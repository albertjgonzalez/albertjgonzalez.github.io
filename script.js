
  var heading = document.getElementById('heading');
  var audio = document.getElementById('audio-logo');
  var about = document.getElementById('aboutme-logo');
  var coding = document.getElementById('coding-logo');
  var visual = document.getElementById('visual-logo');
  var logos = document.getElementsByClassName('spinlinks')
  var aboutmebody = document.getElementById('aboutMe-body')
  
  
  
  
  
    
  
    audio.addEventListener("mouseenter",function(){
      heading.style.visibility = 'visible';
      heading.innerHTML= 'Audio';
    }); 
    audio.addEventListener("mouseleave",function(){
      heading.style.visibility = 'hidden';
    }); 
    about.addEventListener("mouseenter",function(){
      heading.style.visibility = 'visible';
      heading.innerHTML= 'Contact';
    }); 
    about.addEventListener("mouseleave",function(){
      heading.style.visibility = 'hidden';
    }); 
    coding.addEventListener("mouseenter",function(){
      heading.style.visibility = 'visible';
      heading.innerHTML= 'Coding';
    }); 
    coding.addEventListener("mouseleave",function(){
      heading.style.visibility = 'hidden';
    }); 
    visual.addEventListener("mouseenter",function(){
      heading.style.visibility = 'visible';
      heading.innerHTML= 'Visual';
    }); 
    visual.addEventListener("mouseleave",function(){
      heading.style.visibility = 'hidden';
    }); 
  
    $('spinlinks').hover( function(){
      console.log('hello');
    });
   