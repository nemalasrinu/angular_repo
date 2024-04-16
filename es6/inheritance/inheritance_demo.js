class Widget{
    constructor(id, x, y) {
        this.id = id;
        this.setPosition(x, y);
    }
    setPosition(x, y) {
        this.x = x * 200;
        this.y = y;
    }
}

class ImageBox extends Widget {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.setSize(width, height);
    }

    setSize(width, height){
        this.width = width;
        this.height = height;
    }

    reset() {
        console.log(this.id)
        console.log(this.x)
        console.log(this.y)
        console.log(this.width)
        console.log(this.height)
        this.setPosition(0, 0);
        this.setSize(0, 0);
        console.log(this.id)
        console.log(this.x)
        console.log(this.y)
        console.log(this.width)
        console.log(this.height)
    }
}

const myImageBox = new ImageBox(1, 10, 20, 50, 60);
myImageBox.reset();