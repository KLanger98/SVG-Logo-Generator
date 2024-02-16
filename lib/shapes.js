class Shape{
    constructor(){

    }
    setColor(){}
}

class Circle{
    constructor(){
        this.radius = "20";
        this.cy = "75";
        this.cx = "25";
        this.fill = "black"
    }
    setColor(color){
        this.fill = color;
    }
    render(){
    return `<circle cx=${this.cx} cy=${this.cy} r=${this.radius} fill=${this.fill}/>`
    }
}

class Square{
    constructor(){
        this.x = "10";
        this.y = "10";
        this.width = "30";
        this.height = "30";
    }

    setColor(){}

    render(){
        return `<rect x=${this.x} y=${this.y} width=${this.width} height=${this.height}/>`
    }
}

class Triangle{
    constructor(){
    }

    setColor(color){
        this.fill = color;
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182"`
    }
}


module.exports = {Square, Circle, Triangle}