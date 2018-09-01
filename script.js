
var heading = document.getElementById('heading');
var audio = document.getElementById('audio-logo');
var about = document.getElementById('aboutme-logo');
var coding = document.getElementById('coding-logo');
var visual = document.getElementById('visual-logo');



audio.addEventListener('click' ,function () {
  alert("content coming soon");
  });


  audio.addEventListener("mouseenter",function(){
    heading.innerHTML= 'Audio';
  }); 
  audio.addEventListener("mouseleave",function(){
    heading.innerHTML= '';
  }); 
  about.addEventListener("mouseenter",function(){
    heading.innerHTML= 'About Me';
  }); 
  about.addEventListener("mouseleave",function(){
    heading.innerHTML= '';
  }); 
  coding.addEventListener("mouseenter",function(){
    heading.innerHTML= 'Coding';
  }); 
  coding.addEventListener("mouseleave",function(){
    heading.innerHTML= '';
  }); 
  visual.addEventListener("mouseenter",function(){
    heading.innerHTML= 'Visual';
  }); 
  visual.addEventListener("mousleave",function(){
    heading.innerHTML= '';
  }); 

function newFunction() {
  return "mouseout";
}
