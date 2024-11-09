import { participantTemplate, successTemplate } from './templates.js';

const addParticipant = document.querySelector("#add");
let count = 1;
addParticipant.addEventListener("click", () => {
    count += 1;
    addParticipant.insertAdjacentHTML("beforebegin", participantTemplate(count));
})


function calculateFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  
  feeElements = [...feeElements];
  let total = 0;

  feeElements.forEach((number) => {
    let fee = parseFloat(number.value) || 0;
    total += fee;
  })

  return total;
}

const form = document.querySelector("form");
const summary = document.querySelector("#summary");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const info = {
    adultName: document.querySelector("#adult_name").value,
    participants: count,
    fees: calculateFees()
  }

  form.style.display = "none";
  summary.innerHTML = successTemplate(info);
})