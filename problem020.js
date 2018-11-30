function Square(a) {
    this.a = a;}

Square.prototype.getArea = function() {
    return (this.a * this.a);}

Square.prototype.getPerimeter = function() {
    return (4 * this.a);}