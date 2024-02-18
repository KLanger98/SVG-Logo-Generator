class Shape{
    constructor(){
        this.fill = "";
    }
    setColor(color){
        this.fill = color;
    }
}
//Create a Circle class which contains all details necessary for a circle
class Circle extends Shape{
    constructor(){
        super()
        this.radius = "75";
        this.cy = "105";
        this.cx = "150";
        this.fill = "black"
        this.textPositionX = "150"
        this.textPositionY = "125"
    }
    render(){
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.fill}"/>`
    }
}

//Create a Square class with all details necessary for a square
class Square extends Shape{
    constructor(){
        super()
        this.x = "75";
        this.y = "30";
        this.width = "150";
        this.height = "150";
        this.textPositionX = "150"
        this.textPositionY = "125"
    }
    render(){
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}"/>`
    }
}


//Create a Triangle class with all details necessary for a Triangle
class Triangle extends Shape{
    constructor(){
        super()
        this.textPositionX = "150"
        this.textPositionY = "165"
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}"/>`
    }
}


module.exports = {Square, Circle, Triangle}