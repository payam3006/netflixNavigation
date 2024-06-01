const q = console.log;

const mainMenue = document.getElementById("main");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");

function openMenue() {
  l3.classList.remove("delay1");
  mainMenue.classList.add("delay1");

  mainMenue.classList.remove("out");
  l2.classList.remove("out");
  l3.classList.remove("out");
}

function closeMenue() {
  mainMenue.classList.remove("delay1");
  l3.classList.add("delay1");

  mainMenue.classList.add("out");
  l2.classList.add("out");
  l3.classList.add("out");
}
