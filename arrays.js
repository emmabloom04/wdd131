const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}<li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

const grades = ['A', 'B', 'A'];
function gpaPoints(letter) {
    if (letter == 'A') {
        return 4;
    }
    else if (letter == 'B') {
        return 3;
    }
    else if (letter == 'C') {
        return 2;
    }
    else if (letter == 'D') {
        return 1;
    }
    else {
        return 0;
    }
}

const gradesAsGpa = grades.map(gpaPoints);
console.log(gradesAsGpa);

const pointsTotal = gradesAsGpa.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gradesAsGpa.length;
console.log(gpa);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const result = fruits.filter((word) => word.length > 6);
console.log(result);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
console.log(luckyIndex);