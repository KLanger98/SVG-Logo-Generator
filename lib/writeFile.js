const fs = require('fs');

//Create a function that generates a 'logo.svg' file given content
function generateFile(content){
    fs.writeFile('logo.svg', content, (err) =>{
        if(err){
            console.error(Error, "Unable to generate file")
        }
        console.log("Generated logo.svg")
    })
}

module.exports = generateFile