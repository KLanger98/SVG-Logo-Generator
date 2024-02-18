
//Import an SVG image class 
const promptUser = require("./lib/handleInput")
const writeFile = require('./lib/writeFile');
const Logo = require('./lib/generateImageMarkdown')



//Prompt User for image details awaiting returned promise
promptUser()
    .then((response) => {
        //Generate a logo object
        let logo = new Logo(response)
        //Construct a shape as a value on the logo object
        logo.constructShape(logo.shape)
        //write file from logo object markdown generator function
        writeFile(logo.generateMarkdown());
    })
    .catch((error) => {
        console.error(error)
    })
    
