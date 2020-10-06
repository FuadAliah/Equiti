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

$(".nav-pills li").on("click", function () {
  $("#drop").text($(this).text());
  $(".link-drop").parent().toggleClass("hide");
});

const smallBack = document.getElementsByClassName("smallBack")[0].outerHTML;
const bigBack = (document.getElementsByClassName(
  "bigBack"
)[0].innerHTML = smallBack.repeat(95));

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

const xLabels = [];
const ytemps = [];

chartIt();

async function chartIt() {
  await getData();
  const ctx = document.getElementById("oilChart").getContext("2d");
  const oilChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xLabels,
      datasets: [
        {
          data: ytemps,
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
            gridLines: {
              zeroLineColor: "rgba(255, 255, 255, 0.25)",
            },
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
            gridLines: {
              zeroLineColor: "rgba(255, 255, 255, 0.25)",
            },
            ticks: {
              fontColor: "rgba(255, 255, 255, 0.5)",
              stepSize: 0.25,
              fontSize: 9,
            },
          },
        ],
      },
    },
  });
}
async function getData() {
  const response = await fetch("../data/ZonAnn.Ts+dSST.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach((row) => {
    const columns = row.split(",");
    const day = columns[0];
    xLabels.push(day);
    const temp = columns[1];
    ytemps.push(temp);
  });
}
