#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number = ", type: "number", name: "firstNumber" },
    { message: "Enter second number = ", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Exponentiation",
            "Modulus",
        ],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(chalk.green(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.blue(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.yellow(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.red(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "Exponentiation") {
    console.log(chalk.cyan(answer.firstNumber ** answer.secondNumber));
}
else if (answer.operator === "Modulus") {
    console.log(chalk.grey(answer.firstNumber % answer.secondNumber));
}
else {
    console.log("Please select valid operator");
}
console.log("The End");
