
var heading = document.getElementById('heading');
var audio = document.getElementById('audio-logo');
var about = document.getElementById('aboutme-logo');
var coding = document.getElementById('coding-logo');
var visual = document.getElementById('visual-logo');



audio.addEventListener('click' ,function () {
  alert("content coming soon");
  });


  audio.addEventListener("mouseover",function(){
    heading.innerHTML= 'Audio';
  }); 
  audio.addEventListener("mouseout",function(){
    heading.innerHTML= '';
  }); 
  about.addEventListener("mouseover",function(){
    heading.innerHTML= 'About Me';
  }); 
  about.addEventListener("mouseout",function(){
    heading.innerHTML= '';
  }); 
  coding.addEventListener("mouseover",function(){
    heading.innerHTML= 'Coding';
  }); 
  coding.addEventListener("mouseout",function(){
    heading.innerHTML= '';
  }); 
  visual.addEventListener("mouseover",function(){
    heading.innerHTML= 'Visual';
  }); 
  visual.addEventListener("mouseout",function(){
    heading.innerHTML= '';
  }); 