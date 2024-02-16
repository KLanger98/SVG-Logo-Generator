

class Circle{
    constructor(){
        this.radius = "75";
        this.cy = "105";
        this.cx = "150";
        this.fill = "black"
        this.textPositionX = "150"
        this.textPositionY = "125"
    }
    setColor(color){
        this.fill = color;
    }
    render(){
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.fill}"/>`
    }
}

class Square{
    constructor(){
        this.x = "75";
        this.y = "30";
        this.width = "150";
        this.height = "150";
        this.textPositionX = "150"
        this.textPositionY = "125"
    }

    setColor(color){
        this.fill = color;
    }

    render(){
        return `<rect x=${this.x} y=${this.y} width=${this.width} height=${this.height} fill="${this.fill}"/>`
    }
}

class Triangle{
    constructor(){
        this.textPositionX = "155"
        this.textPositionY = "165"
    }

    setColor(color){
        this.fill = color;
    }

    render(){
        return `<polygon  points="160, 18 244, 182 56, 182" fill="${this.fill}"/>`
    }
}


module.exports = {Square, Circle, Triangle}