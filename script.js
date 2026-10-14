const form = document.getElementById("marksForm");
const message = document.getElementById("message");

function formatNumber(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function calculate(marks) {
  // The marks are stored together in an array.
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const highest = Math.max(...marks);
  const lowest = Math.min(...marks);

  document.getElementById("total").textContent = formatNumber(total);
  document.getElementById("average").textContent = formatNumber(average);
  document.getElementById("highest").textContent = formatNumber(highest);
  document.getElementById("lowest").textContent = formatNumber(lowest);
  document.getElementById("array").textContent =
    "[" + marks.map(formatNumber).join(", ") + "]";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = Array.from(form.querySelectorAll("input"));
  const marks = inputs.map(input => Number(input.value));

  if (inputs.some(input => input.value === "") ||
      marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    message.textContent = "Please enter a mark from 0 to 100 for every student.";
    return;
  }

  message.textContent = "";
  calculate(marks);
});

calculate([75, 80, 65, 90, 70]);
