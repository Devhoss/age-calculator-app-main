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

  const emptyError = document.querySelectorAll(".empty-error");
  emptyError.forEach((error) => {
    document.querySelectorAll(".label, input.date-input").forEach((name) => {
      if (year === "" || month === "" || day === "") {
        error.textContent = "This field is required";
        yearsResult.textContent = "- -";
        monthsResult.textContent = "- -";
        daysResult.textContent = "- -";
        name.classList.add("red");
        name.classList.add("red-border");
      } else {
        error.innerHTML = "";
        yearsResult.textContent = yearsEntered;
        name.classList.remove("red");
        name.classList.remove("red-border");
      }
    });
  });
});

// else if (month === "") {
//   error.textContent = "This field is required";
//   monthsResult.textContent = "--";
// } else if (day === "") {
//   error.textContent = "This field is required";
//   daysResult.textContent = "--";
// }
