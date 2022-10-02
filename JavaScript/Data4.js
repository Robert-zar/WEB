var time = setInterval(function() {
    var date = new Date();
var weekday=new Array(7);
  weekday[0]="Воскресенье";
  weekday[1]="Понедельник";
  weekday[2]="Вторник";
  weekday[3]="Среда";
  weekday[4]="Четверг";
  weekday[5]="Пятница";
  weekday[6]="Суббота";
    document.getElementById("time").innerHTML = (weekday[date.getDay()] + ',' + '&nbsp;' + date.toLocaleString());
  }, 1000);