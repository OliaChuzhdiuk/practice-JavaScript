const items = document.querySelectorAll(".countdown-item > h4");
const countDownElement = document.querySelector(".countdown");

// Почати дату відліку
let countdownDate = new Date(2022, 22, 0, 22, 0, 0).getTime();

function getCountdownTime() {
  // Отримати теперішню дату
  const now = new Date().getTime();

  //Знайти різницю часу
  const distance = countdownDate - now;

  // 1 second = 1000 milliseconds;
  // 1 hour = 60 minutes
  // 1 minutes = 60second
  // 1 day = 24 hour

  // Створюємо перемінні в мілісекундах

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinutes = 60 * 1000;

  // Підрахунок для днів, годин, хвилин, секунд

  const days = Math.floor(distance / oneDay);
  const hours = Math.floor((distance % oneDay) / oneHour);
  const minutes = Math.floor((distance % oneHour) / oneMinutes);
  const second = Math.floor((distance % oneMinutes) / 1000);

  //  Ствлорюємо масив з переміними

  const values = [days, hours, minutes, second];

  // Додаємо значення переміної на сторінку

  items.forEach((item, index) => {
    item.textContent = values[index];
  });

  if (distance < 0) {
    clearInterval(countdown);
    countDownElement.innerHTML = "<h4 class='next'>Time get our</h4>";
  }
}

let countdown = setInterval(getCountdownTime, 1000);

getCountdownTime();
