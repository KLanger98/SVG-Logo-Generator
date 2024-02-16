import inquirer from "inquirer";

let questions = [
    {
        type: 'input',
        message: 'What text would you like in your logo (Must be three or less characters)',
        name:'text'
    },{
        type: 'input',
        message: 'What color do you want your text to be?',
        name:'text-color'
    },
    {
        type: 'list',
        message: 'Select a shape for your logo',
        choices: ['Circle', 'Square', 'Triangle'],
        name:'shape'
    },
    {
        type: 'list',
        message: 'Select a shape for your logo',
        choices: ['Circle', 'Square', 'Triangle'],
        name:'shape'
    },

]

function promptUser(){

    inquirer
        .prompt(questions)
        .then((response) => {
            return response
        })
}

module.exports = promptUser;