let menuBtn = document.getElementsByClassName("img-mobile-menu");
let crossBtn = document.getElementsByClassName("img-mobile-cross");

let mainBody = document.getElementById("main");
let ulSlide = document.getElementsByTagName("ul");

let slider = document.getElementById("unordered");

// to target the first icon after the screen size is less then 850px
let responsiveIcon = document.getElementsByClassName("icon-responsive");

let luffy = document.getElementById("monkey");
luffy.addEventListener("mouseover", function () {
  // console.log("new");
  var aud = new Audio("audio/luffy.mp3");
  aud.play();
});
let naruto = document.getElementById("naruto");
naruto.addEventListener("mouseover", function () {
  console.log("new");
  var aud = new Audio("audio/naruto.mp3");
  aud.play();
});

// adding a event listener
responsiveIcon[0].addEventListener("mouseover", function () {
  responsiveIcon[1].style.display = "block";
  responsiveIcon[0].style.display = "none";

  slider.style.position = "absolute";
  slider.style.left = "0%";
});

// adding another event listener when we press the next icon
responsiveIcon[1].addEventListener("mouseover", function () {
  responsiveIcon[0].style.display = "block";
  responsiveIcon[1].style.display = "none";

  slider.style.position = "absolute";
  slider.style.left = "100%";
});
