"use strict";

lottie.loadAnimation({
  container: $('.avocado')[0],
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_riok2joc.json'
});
"use strict";

setInterval(function () {
  var finishDate = new Date('July 1, 2022 00:00:00');
  var countDate = new Date();
  var daysLeft = 0;

  for (var d = 0; countDate < finishDate; d++) {
    countDate.setDate(countDate.getDate() + 1);
    if (countDate.getDay() != 6 && countDate.getDay() != 0) daysLeft++;
  }

  var holidays = 7;
  var result = daysLeft - holidays - 1;
  var left = '';
  var text = '';

  if (result % 10 == 1) {
    text = 'день';
    left = 'остался';
  } else if (result % 10 == 2 || result % 10 == 3 || result % 10 == 4) {
    text = 'дня';
    left = 'осталось';
  } else {
    text = 'дней';
    left = 'осталось';
  }

  document.querySelector('.number').innerText = result;
  document.querySelector('.days').innerText = text;
  document.querySelector('.left').innerText = left;
}, 100);