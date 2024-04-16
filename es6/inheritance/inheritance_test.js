// The extends keyword is used to define a class as a child of another class.
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


class TextBox extends Widget {
    constructor(id, x, y, text) {
        super(id, x, y);
        this.text = text;
        console.log(this.id);
        console.log(this.x);
        console.log(this.y);
        console.log(this.text);
    }
}

const myTextBox = new TextBox(1, 10, 20, 'HELLO');