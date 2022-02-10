const countDownDate = new Date('March 25, 2022 00:00:00').getTime();

const myFunc = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = countDownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.querySelector('#timer p:nth-child(1)').textContent = days + ' : ';
  document.querySelector('#timer p:nth-child(2)').textContent = hours + ' : ';
  document.querySelector('#timer p:nth-child(3)').textContent = minutes + ' : ';
  document.querySelector('#timer p:nth-child(4)').textContent = seconds;
}, 1000);
