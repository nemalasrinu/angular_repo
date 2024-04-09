var Widget = function(id, x, y) {
    this.id = id;
    console.log(this.id);
    this.setPosition(x, y)
    console.log(this.x);
    console.log(this.y);
}
Widget.prototype.setPosition = function(x, y){
    this.x = x;
    this.y = y;
    console.log(this.x);
    console.log(this.y);
    console.log(this.id);
}

const myWidget = new Widget(1, 10, 20);
console.log(this.x);
console.log(this.y);