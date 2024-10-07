const PI = 3.14;
let area = 0;
function CircleArea(radius) {
    const area = radius * radius * PI;
    return area;
}

area = CircleArea(3);
console.log(area);