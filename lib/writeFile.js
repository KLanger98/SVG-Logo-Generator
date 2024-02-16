const fs = require('fs');

function generateFile(content){
    fs.writeFile('logo.svg', content, (err) =>{
        console.error(Error, "Unable to generate file")
    })
    console.log("Generated logo.svg")
}


module.exports = generateFile