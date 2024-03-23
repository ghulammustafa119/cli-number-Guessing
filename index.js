#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
if (answers.userguessedNumber === randomNumber) {
    console.log("Congratulations,you enterd right number.");
}
else {
    console.log("Better luck next time.");
}
