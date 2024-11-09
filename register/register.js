function participantTemplate(count) {
  return `<section class="participant${count}">
          <p>Participant ${count}</p>
          <div class="item">
            <label for="fname"> First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" value="" required />
          </div>
          <div class="item activities">
            <label for="activity">Activity #<span>*</span></label>
            <input id="activity" type="text" name="activity" />
          </div>
          <div class="item">
            <label for="fee">Fee ($)<span>*</span></label>
            <input id="fee" type="number" name="fee" />
          </div>
          <div class="item">
            <label for="date">Desired Date <span>*</span></label>
            <input id="date" type="date" name="date" />
          </div>
          <div class="item">
            <p>Grade</p>
            <select>
              <option selected value="" disabled selected></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>`;
}

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

function successTemplate(info) {
  return `Thank you ${info.adultName} for registering. You have registered ${info.participants} participants and owe $${info.fees} in fees.`;
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