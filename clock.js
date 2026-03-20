window.onload = function () {
  const hourHand = document.querySelector(".hourHand");
  const minuteHand = document.querySelector(".minuteHand");
  const secondHand = document.querySelector(".secondHand");
  const time = document.querySelector(".time");

  function setDate() {
    const today = new Date();

    const second = today.getSeconds();
    const secondDeg = (second / 60) * 360;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const minute = today.getMinutes();
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

    const hour = today.getHours();
    const hourDeg = (hour / 12) * 360 + (minute / 60) * 30;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    time.innerHTML = `<span><strong>${hour}</strong> : ${minute} : <small>${second}</small></span>`;
  }

  setInterval(setDate, 1000);
};
