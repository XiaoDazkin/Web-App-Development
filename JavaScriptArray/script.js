const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Strawberry"
];

const vegetables = [
    "Carrot",
    "Broccoli",
    "Spinach",
    "Tomato",
    "Cucumber"
];

fruits.forEach((item) => {
    document.getElementById("fruit-list").innerHTML += `<li>${item}</li>`;
});

vegetables.forEach((item) => {
    document.getElementById("veg-list").innerHTML += `<li>${item}</li>`;
});
