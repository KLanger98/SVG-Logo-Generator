const inquirer = require('inquirer')
let questions = [
    {
        type: 'input',
        message: 'What text would you like in your logo (Must be three or less characters)',
        name:'text'
    },
    {
        type: 'input',
        message: 'What color do you want your text to be?',
        name:'textColor'
    },
    {
        type: 'list',
        message: 'Select a shape for your logo',
        choices: ['Circle', 'Square', 'Triangle'],
        name:'shape'
    },
    {
        type: 'input',
        message: 'Select the color of your shape',
        name:'shapeColor'
    },

]

function promptUser(){
    return new Promise((resolve, reject) => {
        inquirer
        .prompt(questions)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error)
        })
    })

    
}

module.exports = promptUser;