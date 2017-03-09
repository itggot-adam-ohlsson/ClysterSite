// PARALLAX
$('.top').parallax({imageSrc: './img/backgPS.png'});
$('.clyster').parallax({imageSrc: './img/clyster.png'});
$('.staffs').parallax({imageSrc: './img/staffs.png'});
$('.servers').parallax({imageSrc: './img/servers.png'});

// SCROLL TO REVEAL
window.sr = ScrollReveal({ reset: true });
sr.reveal('.TITLES, .titles, .logo', { duration: 1200 });

// AUTO SCROLL

$.localScroll();

// OTHER FUNCTIONS

function serverTilesFFA() {
  document.querySelector("#ffa").classList.toggle("serverTilesClick");
  document.querySelector("#ffa").classList.toggle("serverTilesHover");
  document.querySelector("#ffaInfo").classList.toggle("InfoClick");
}

function serverTilesFaction() {
  document.querySelector("#faction").classList.toggle("serverTilesClick");
  document.querySelector("#faction").classList.toggle("serverTilesHover");
  document.querySelector("#factionInfo").classList.toggle("InfoClick");
}

function serverTilesArenapvp() {
  document.querySelector("#arenapvp").classList.toggle("serverTilesClick");
  document.querySelector("#arenapvp").classList.toggle("serverTilesHover");
  document.querySelector("#arenapvpInfo").classList.toggle("InfoClick");
}

function serverTilesUHC() {
  document.querySelector("#uhc").classList.toggle("serverTilesClick");
  document.querySelector("#uhc").classList.toggle("serverTilesHover");
  document.querySelector("#uhcInfo").classList.toggle("InfoClick");
}

// SLIDESHOW
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  5000);
//SLIDESHOW

new Clipboard('.ip');

$(document).ready(function(){
    $("#topBlock").click(function(){
        $("#copiedIP").fadeIn(2000);
        $("#copiedIP").fadeOut(500);
    });
});
