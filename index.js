
//Import an SVG image class 
const promptUser = require("./lib/handleInput")
const writeFile = require('./lib/writeFile');
const {Circle, Square, Triangle} = require('./lib/shapes')
const Logo = require('./lib/generateImageMarkdown')



//Ask for user prompts


promptUser()
    .then((response) => {
        console.log(response)
        let logo = new Logo(response)
        logo.constructShape(logo.shape)
        console.log(logo)
        writeFile(logo.generateMarkdown());
    })
    .catch((error) => {
        console.error(error)
    })
    
    
function fetchShape(){

}

// Generate desired shapes

//Generate markup

//generate file 