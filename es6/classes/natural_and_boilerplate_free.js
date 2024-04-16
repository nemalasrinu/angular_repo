class Widget {
    constructor(id, x, y) {
        this.id = id;
        console.log(this.id);
        this.setPosition(x, y);
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
        console.log(this.x);
        console.log(this.y);
    }
}

const myWidget = new Widget(1, 20, 10);