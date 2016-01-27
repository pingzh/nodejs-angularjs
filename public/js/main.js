// https://responsivedesign.is/resources/javascript-jquery/back-stretch

// $.backstretch("img/home_background.jpg", {speed: 150});

$(document).ready(function() {
  if(!$.cookie("cs")) {
    $("#chooseSchoolModalButton").click();
  }
});

