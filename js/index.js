const countDate = new Date("Nov 3, 2020 12:23:45").getTime();

function newYear() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  for (let days of document.getElementsByClassName("count-days")) {
    days.innerHTML = ("0" + d).slice(-2);
  }
  for (let hours of document.getElementsByClassName("count-hours")) {
    hours.innerHTML = ("0" + h).slice(-2);
  }
  for (let minutes of document.getElementsByClassName("count-minutes")) {
    minutes.innerHTML = ("0" + m).slice(-2);
  }
  for (let seconds of document.getElementsByClassName("count-seconds")) {
    seconds.innerHTML = ("0" + s).slice(-2);
  }
}

let ele = document.getElementsByClassName("custom-link-drop active");
let dropdown = (document.getElementById("drop").innerHTML = ele[0].innerText);

let elem = document.getElementsByClassName("link-drop");
elem.onclick = function () {
  let vac = (document.getElementsByClassName("desk-drop").innerHTML = dropdown);
  console.log(vac);
};

mobDrop = function () {
  $("#pills-tab").toggleClass("hide");
};

setInterval(function () {
  newYear();
}, 1000);

let firstPer = document.getElementById("per-one").innerHTML.slice(0, 2);
let secPer = document.getElementById("per-two").innerHTML.slice(0, 2);

let firstName = (document.getElementById("name-one").style.width =
  firstPer * 1.5 + "%");
let secName = (document.getElementById("name-two").style.width =
  secPer * 1.5 + "%");

const ctx = document.getElementById("oilChart").getContext("2d");
const oilChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "",
        data: [12.25, 11.25, 13.75, 5.5],
        borderWidth: 1,
        fill: false,
        borderColor: "#00AFAA",
        lineTension: 0,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
      },
    ],
  },
  borderColor: "#fff",
  options: {
    legend: {
        display: false,
    },
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            max: 20,
            min: 0,
            stepSize: 0.25,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#FFF",
            stepSize: 0.25,
          },
        },
      ],
    },
  },
});

const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

Popper.createPopper(button, tooltip, {
  placement: 'bottom',
});