import inquirer from "inquirer";

interface NameAnswer {
  first_name: string;
  last_name: string;
}

inquirer
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
  .then((answers: NameAnswer) => {
    console.log(`Hello, ${answers.first_name} ${answers.last_name}!`);
  })
  .catch((error: any) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.error("An error occurred:", error);
    }
  });
