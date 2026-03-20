window.onload = function () {
  const hourHand = document.querySelector(".hourHand");
  const minuteHand = document.querySelector(".minuteHand");
  const secondHand = document.querySelector(".secondHand");
  const time = document.querySelector(".time");
  const dateDiv = document.querySelector(".date");
  const toggleBtn = document.getElementById("toggleTheme");

  // Tamil slang time definition
  function getTamilSlang(hour, minute) {
    if (hour >= 0 && hour < 6) return `Rathiri ${hour}:${minute} da machii`;
    if (hour >= 6 && hour < 12) return `Kaalai ${hour}:${minute} da machii`;
    if (hour >= 12 && hour < 18) return `Madhiyana ${(hour-12)}:${minute} da machii`;
    return `Saayankaalam ${(hour-12)}:${minute} da machii`;
  }

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

    // Tamil slang digital time
    time.innerHTML = `<span>${getTamilSlang(hour, minute)}</span>`;

    // Date display
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDiv.innerHTML = today.toLocaleDateString('ta-IN', options);
  }

  setInterval(setDate, 1000);

  // Dark/Light mode toggle
  document.body.classList.add("light"); // default theme
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  });
};
