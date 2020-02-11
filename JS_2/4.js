let Vector = function(x,y) {
    this.x = x;
    this.y = y;
  };
Vector.prototype.plus = function plus(vector) {
    var x = this.x + vector.x;
    var y = this.y + vector.y;
    return new Vector(x, y);
  };
Vector.prototype.minus = function minus(vector) {
    var x = this.x - vector.x;
    var y = this.y - vector.y;
    return new Vector(x, y);
  };
Object.defineProperty(Vector.prototype, "length", {
	get: function() {
	return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2) )
	}
  });
console.log(new Vector(3, 4).length);
console.log(new Vector(3, 4).minus(new Vector(1,2)));

