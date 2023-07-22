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

  const monthsEntered = currentMonth - month;
  monthsResult.textContent = monthsEntered;

  const daysEntered = currentDay - day;
  daysResult.textContent = daysEntered;

  const emptyError = document.querySelectorAll(".empty-error");
  const invalidDay = document.getElementById("day-error");
  const invalidMonth = document.getElementById("month-error");
  const invalidYear = document.getElementById("year-error");

  emptyError.forEach((error) => {
    document.querySelectorAll(".label, input.date-input").forEach((name) => {
      if (year === "" || month === "" || day === "") {
        error.textContent = "This field is required";
        yearsResult.textContent = "- -";
        monthsResult.textContent = "- -";
        daysResult.textContent = "- -";
        name.classList.add("red");
        name.classList.add("red-border");
      } else if (day < 1 || day > 31) {
        invalidDay.textContent = "Must be a valid day";
        yearsResult.textContent = "- -";
        monthsResult.textContent = "- -";
        daysResult.textContent = "- -";
        name.classList.add("red");
        name.classList.add("red-border");
      } else if (month < 1 || month > 12) {
        invalidMonth.textContent = "Must be a valid month";
        yearsResult.textContent = "- -";
        monthsResult.textContent = "- -";
        daysResult.textContent = "- -";
        name.classList.add("red");
        name.classList.add("red-border");
      } else if (year > currentYear) {
        invalidYear.textContent = "Must be in the past";
        yearsResult.textContent = "- -";
        monthsResult.textContent = "- -";
        daysResult.textContent = "- -";
        name.classList.add("red");
        name.classList.add("red-border");
      } else if (month == 4 && day >= 31) {
        invalidDay.textContent = "Must be a valid date";
        yearsResult.textContent = "- -";
        monthsResult.textContent = "- -";
        daysResult.textContent = "- -";
        name.classList.add("red");
        name.classList.add("red-border");
      } else {
        error.innerHTML = "";
        yearsResult.textContent = yearsEntered;
        monthsResult.textContent = monthsEntered;
        daysResult.textContent = daysEntered;
        name.classList.remove("red");
        name.classList.remove("red-border");
      }
    });
  });
});
