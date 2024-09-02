const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://aws.random.cat/meow";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
  } catch (error) {
    console.log(error);
  }
}
button.addEventListener("click", () => {
  let isLoader = image.complete;
  if (isLoader) {
    fetchHandler();
  }
});

// ///////////////////////////////////////////////////////////////////////////
// const salaries1 = {
//   Manager: { salary: 1000, tax: "10%" },
//   Designer: { salary: 600, tax: "30%" },
//   Artist: { salary: 1500, tax: "15%" },
// };
// const team1 = [
//   { name: "Misha", specialization: "Manager" },
//   { name: "Max", specialization: "Designer" },
//   { name: "Vova", specialization: "Designer" },
//   { name: "Leo", specialization: "Artist" },
// ];
// const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
// console.log(JSON.stringify(financeReport1));

// const salaries2 = {
//   TeamLead: { salary: 1000, tax: "99%" },
//   Architect: { salary: 9000, tax: "34%" },
// };
// const team2 = [
//   { name: "Alexander", specialization: "TeamLead" },
//   { name: "Gaudi", specialization: "Architect" },
//   { name: "Koolhas", specialization: "Architect" },
//   { name: "Foster", specialization: "Architect" },
//   { name: "Napoleon", specialization: "General" },
// ];
// const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
// console.log(JSON.stringify(financeReport2));

// function calculateTeamFinanceReport(salaries, team) {
//   const bySpec = {};
//   let totalBudgetTeam = 0;

// // Iterate through the team array
// team.forEach((member) => {
//   const { specialization } = member;
//   // Check if the specialization exists in the salaries object
//   if (salaries[specialization]) {
//     // Get the salary and tax information for the specialization
//     const { salary, tax } = salaries[specialization];
//     // Calculate the total budget for the specialization by adding the salary multiplied by the parsed tax
//     const parsedTax = 1 + parseFloat(tax) / 100;
//     bySpec[specialization] =
//       (bySpec[specialization] || 0) + salary * parsedTax;
//     totalBudgetTeam += salary * parsedTax;
//   }
// });

//   // Truncate the fractional part after all calculations
//   totalBudgetTeam = Math.trunc(totalBudgetTeam);

//   // Create a new object with the total budget for each specialization
//   const result = Object.fromEntries(
//     Object.entries(bySpec).map(([key, value]) => [
//       "totalBudget" + key,
//       Math.trunc(value),
//     ])
//   );
//   console.log({ totalBudgetTeam, ...result });
//   return { totalBudgetTeam, ...result };
// }

// function calculateTeamFinanceReport(salaries, team) {
//   const roles = [...Object.keys(salaries)].map(
//     (o) => team.filter((x) => x.specialization == o).length
//   );
//   return [...Object.values(salaries)]
//     .map((o, i) => (o.salary + (o.salary / 100) * parseInt(o.tax)) * roles[i])
//     .reduce((a, b) => a + b, 0)
//     .toFixed(2);
// }

// console.log(calculateTeamFinanceReport(salaries1, team1)); // 4385.00
// console.log(calculateTeamFinanceReport(salaries2, team2));

// let x = 5;

// function example() {
//   let x = 10;
//   console.log(x);
// }
// example();
// console.log(x);

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 3000);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 1000);

// console.log("End");
// const object = {
//   getx() {
//     return 17;
//   },
// };
// object.x = 5;
// console.log(++object.x);
// const person = { age: 25 };
// const person2 = person;
// person2.age = 40;
// console.log(person.age);
// const obj = {
//   get x() {
//     return 17;
//   },
// };
// obj.x = 5;
// console.log(++obj.x);

// class User {
//   constructor(username, password) {
//     Object.assign(this, {
//       username,
//       password,
//     });
//   }
// }
// class Admin extends User {
//   constructor(username, password, level) {
//     Object.assign(this, {
//       username,
//       password,
//       level,
//     });
//   }
//   static doSomething() {}
// }
// const doumble = "string"
// const single = 'string'
// const contains = (string, symbol) => string.includes(symbol)
// contains(doumble, ")
//   contains(doumble, ')
