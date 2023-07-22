const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

  const yearsResult = document.getElementById("years-result");
  const monthsResult = document.getElementById("months-result");
  const daysResult = document.getElementById("days-result");

  const yearsEntered = currentYear - year;
  yearsResult.textContent = yearsEntered;

  const monthsEntered = month - currentMonth;
  monthsResult.textContent = monthsEntered;

  const daysEntered = currentDay - day;
  daysResult.textContent = daysEntered;
});
