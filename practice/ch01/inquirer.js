"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        type: "input",
        name: "first_name",
        message: "What is your first name?",
    },
    {
        type: "input",
        name: "last_name",
        message: "What is your last name?",
    },
])
    .then((answers) => {
    console.log(`Hello, ${answers.first_name} ${answers.last_name}!`);
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.error("Prompt couldn't be rendered in the current environment");
    }
    else {
        // Something else went wrong
        console.error("An error occurred:", error);
    }
});
//# sourceMappingURL=inquirer.js.map