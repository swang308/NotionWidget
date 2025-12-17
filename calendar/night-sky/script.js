const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dates = document.getElementById("dates");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const todayBtn = document.getElementById("todayBtn");


let currentDate = new Date();

function renderCalendar() {

  // dates.className = `dates ${direction}`;
  dates.innerHTML = "";


  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  yearEl.textContent = year;

  monthEl.textContent = currentDate.toLocaleDateString("en-US", {
    month: "long",
  });

  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    dates.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= lastDate; day++) {
    const dateDiv = document.createElement("div");
    dateDiv.textContent = day;

    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dateDiv.classList.add("today");
    }

    dates.appendChild(dateDiv);
  }
}

prev.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

next.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

// todayBtn.onclick = () => {
//   const today = new Date();

//   currentDate = new Date(today);
//   selectedDate = new Date(today);

//   renderCalendar("slide-right");
// };


renderCalendar();
