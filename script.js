var random = new Array();

random[0] = "mailto:hamzatraheem@icloud.com";
random[1] = "https://www.instagram.com/hamzat.raheem/";

function randomlink() {
  window.location = random[Math.floor(Math.random()*random.length)];
  }