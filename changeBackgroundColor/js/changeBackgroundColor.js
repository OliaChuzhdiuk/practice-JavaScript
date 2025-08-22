const button = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = ["#FF5377", "#F9FF33", "#3371FF", "red", "green"];

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

button.addEventListener("click", () => {
  console.log("click");
  let hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function generateHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i += 1) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
