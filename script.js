
// navbar-background-change
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
    document.getElementById("nav-bar").style.backgroundColor="black";
  } else {
    document.getElementById("nav-bar").style.backgroundColor="transparent";
  }
} 
//----------------- Login-Logout -------------------
function log(){
  document.getElementById("full-card").style.display="block";
  document.getElementById("body").style.overflow="hidden";
}
function logout(){
  document.getElementById("full-card").style.display="none";
  document.getElementById("body").style.overflow="auto";
}
// -------------------nav-bar---------------------------

window.screenY=function(){navbar()};
function navbar(){
  let x=window.innerWidth
  document.getElementById("nav-opicon").style.display="block";
  document.getElementById("nav-clicon").style.display="none";
if(x>600){
  document.getElementById("nav-opicon").style.display="none";
  document.getElementById("nav-clicon").style.display="none";
}
}
function  openMenu(){
  document.getElementById("nav").style.display="block";
  document.getElementById("body").style.overflow="hidden";
  document.getElementById("nav-opicon").style.display="none";
  document.getElementById("nav-clicon").style.display="block";
  // document.getElementById("wel-card").style.display="none";
}
function  closeMenu(){
  document.getElementById("body").style.overflow="auto";
  document.getElementById("nav").style.display="none";
  document.getElementById("nav-opicon").style.display="block";
  document.getElementById("nav-clicon").style.display="none";
  // document.getElementById("wel-card").style.display="block";
}
