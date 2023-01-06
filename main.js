let svgbox = null,
  container = null,
  w = 0,
  h = 0;

let a = null,
  b = null,
  c = null,
  d = null,
  i = 0;

const updateSize = () => {
  svgbox = document.querySelector(".svgbox");
  container = document.querySelector(".container");
  w = container.offsetWidth;
  h = container.offsetHeight;
  if (w > h) {
    svgbox.style.width = "25vw";
  } else if (w === h) {
    svgbox.style.width = "40vw";
  } else if (w < h) {
    svgbox.style.width = "60vw";
  }
};

const myFunction = () => {
  if (i === 0) {
    a = document.querySelector("#_00");
    b = document.querySelector("#_28");
    c = document.querySelector("#_27");
    d = document.querySelector("#_26");
  } else if (i === 1) {
    a = document.querySelector("#_01");
    b = document.querySelector("#_00");
    c = document.querySelector("#_28");
    d = document.querySelector("#_27");
  } else if (i === 2) {
    a = document.querySelector("#_02");
    b = document.querySelector("#_01");
    c = document.querySelector("#_00");
    d = document.querySelector("#_28");
  } else if (i > 2 && i < 10) {
    a = document.querySelector(`#_0${i}`);
    b = document.querySelector(`#_0${i - 1}`);
    c = document.querySelector(`#_0${i - 2}`);
    d = document.querySelector(`#_0${i - 3}`);
  } else if (i === 10) {
    a = document.querySelector("#_10");
    b = document.querySelector("#_09");
    c = document.querySelector("#_08");
    d = document.querySelector("#_07");
  } else if (i === 11) {
    a = document.querySelector("#_11");
    b = document.querySelector("#_10");
    c = document.querySelector("#_09");
    d = document.querySelector("#_08");
  } else if (i === 12) {
    a = document.querySelector("#_12");
    b = document.querySelector("#_11");
    c = document.querySelector("#_10");
    d = document.querySelector("#_09");
  } else if (i > 12 && i < 28) {
    a = document.querySelector(`#_${i}`);
    b = document.querySelector(`#_${i - 1}`);
    c = document.querySelector(`#_${i - 2}`);
    d = document.querySelector(`#_${i - 3}`);
  } else if (i === 28) {
    a = document.querySelector("#_28");
    b = document.querySelector("#_27");
    c = document.querySelector("#_26");
    d = document.querySelector("#_25");
    i = -1;
  }
  a.style.opacity = "0.7";
  b.style.opacity = "0.4";
  c.style.opacity = "0.2";
  d.style.opacity = "0";
  i++;
};

let myVar = setInterval(myFunction, 100);

document.addEventListener("DOMContentLoaded", function (event) {
  updateSize();
});

window.onresize = updateSize;
