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

setInterval(function () {
  newYear();
}, 1000);

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        data: [12.25, 11.25, 13.75, 5.5],
        borderWidth: 1,
        fill: false,
        borderColor: "#00AFAA",
        cubicInterpolationMode: "default",
        lineTension: 0,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            max: 20,
            min: 0,
            stepSize: 0.25,
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
