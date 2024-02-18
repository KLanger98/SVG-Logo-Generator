const {Circle, Square, Triangle} = require('./shapes')


class Logo{
    constructor(data){
        this.text = data.text;
        this.textColor = data.textColor;
        this.shape = data.shape;
        this.shapeColor = data.shapeColor;
    }

    constructShape(shape){
        if(shape === "Circle"){
            this.shapeObject = new Circle;
        } else if (shape === "Triangle"){
            this.shapeObject = new Triangle;
        } else if(shape === "Square"){
            this.shapeObject = new Square
        }
        this.shapeObject.setColor(this.shapeColor);
    }

    generateMarkdown(){

        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.shapeObject.render()}

        <text x="${this.shapeObject.textPositionX}" y="${this.shapeObject.textPositionY}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text.toUpperCase()}</text>

        </svg>
        `
    }

}


module.exports = Logo;