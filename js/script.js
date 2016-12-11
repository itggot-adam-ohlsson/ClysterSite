// PARALLAX
$('.top').parallax({imageSrc: './img/top.png'});
$('.clyster').parallax({imageSrc: './img/clyster.png'});
$('.staffs').parallax({imageSrc: './img/staffs.png'});
$('.servers').parallax({imageSrc: './img/servers.png'});

// SCROLL TO REVEAL
window.sr = ScrollReveal({ reset: true });
sr.reveal('.TITLES, .titles, .logo', { duration: 1200 });

// AUTO SCROLL

$.localScroll();

// OTHER FUNCTIONS

/*
function navHome() {
  document.getElementById('navHome').style.backgroundColor = 'white';
  document.getElementById('navHomeTitle').style.color = '#0C707F';
  document.getElementById('navClyster').style.backgroundColor =
  '#0C707F';
  document.getElementById('navServers').style.backgroundColor =
  '#0C707F';
  document.getElementById('navStaffs').style.backgroundColor =
  '#0C707F';
  document.getElementById('navClysterTitle').style.color =
  'white';
  document.getElementById('navServersTitle').style.color =
  'white';
  document.getElementById('navStaffsTitle').style.color =
  'white';
}

function navClyster() {
  document.getElementById('navClyster').style.backgroundColor = 'white';
  document.getElementById('navClysterTitle').style.color = '#0C707F';
  document.getElementById('navHome').style.backgroundColor =
  '#0C707F';
  document.getElementById('navServers').style.backgroundColor =
  '#0C707F';
  document.getElementById('navStaffs').style.backgroundColor =
  '#0C707F';
  document.getElementById('navHomeTitle').style.color =
  'white';
  document.getElementById('navServersTitle').style.color =
  'white';
  document.getElementById('navStaffsTitle').style.color =
  'white';
}

function navServers() {
  document.getElementById('navServers').style.backgroundColor = 'white';
  document.getElementById('navServersTitle').style.color = '#0C707F';
  document.getElementById('navClyster').style.backgroundColor =
  '#0C707F';
  document.getElementById('navHome').style.backgroundColor =
  '#0C707F';
  document.getElementById('navStaffs').style.backgroundColor =
  '#0C707F';
  document.getElementById('navClysterTitle').style.color =
  'white';
  document.getElementById('navHomeTitle').style.color =
  'white';
  document.getElementById('navStaffsTitle').style.color =
  'white';
}

function navStaffs() {
  document.getElementById('navStaffs').style.backgroundColor = 'white';
  document.getElementById('navStaffsTitle').style.color = '#0C707F';
  document.getElementById('navClyster').style.backgroundColor =
  '#0C707F';
  document.getElementById('navServers').style.backgroundColor =
  '#0C707F';
  document.getElementById('navHome').style.backgroundColor =
  '#0C707F';
  document.getElementById('navClysterTitle').style.color =
  'white';
  document.getElementById('navServersTitle').style.color =
  'white';
  document.getElementById('navHomeTitle').style.color =
  'white';
}
*/

new Clipboard('.ip');

$(document).ready(function(){
    $("#topBlock").click(function(){
        $("#copiedIP").fadeIn(2000);
        $("#copiedIP").fadeOut(500);
    });
});

// PARTICLES

particlesJS("particles-js", {"particles":{"number":{"value":50,"density":{"enable":true,"value_area":1100}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.8,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3.945738208161363,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":183.8161838161838,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});;
