function digitalwatch() {
  var txt = document.getElementById("h4");
  var txt1 = document.getElementById("p");

  var date = new Date();
  var day = date.getDate();
  var mnth = date.getMonth();
  var year = date.getUTCFullYear();
  var hrs = date.getHours();
  var mns = date.getMinutes();
  var sc = date.getSeconds();

  var time = `${hrs % 12} : ${mns} : ${sc}`;
  var din = `${day} / ${mnth} / ${year}`;

  txt.innerHTML = time;
  txt1.innerHTML = din;
  setInterval(digitalwatch, 1000);
}
digitalwatch();
