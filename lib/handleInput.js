const inquirer = require('inquirer')

//List of questions
let questions = [
    {
        type: 'input',
        message: 'What text would you like in your logo (Must be three or less characters)',
        name:'text',
        //Validate user input
        validate: function(input){
            if(input.length <= 3 && input.length > 0){
                return true;
            } else{
                return "User input must be less than 3 and greater than 0"
            }
        }
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
    //Return a promise to await user input
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