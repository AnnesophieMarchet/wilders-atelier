import chalk from "chalk";

const log = console.log;

// log(chalk.blue("Hello") + " World" + chalk.red("!"));

let wilders = ["Adeline", "Thien", "Charlot", "Laura"];
let colors = ["#FF8800", "	#FA8072", "#8727B3", "#087320"];

// for (let i = 0; i < wilders.length; i++) {
//   const wilderName = chalk.hex(colors[i])(wilders[i]);
//   console.log(wilderName);
// }
for (const i in wilders) {
  const wilderName = chalk.hex(colors[i])(wilders[i]);
  console.log(wilderName);
}
// console.log((wilders[0] = chalk.cyanBright));
