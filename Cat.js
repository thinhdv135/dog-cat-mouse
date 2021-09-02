function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(Mouse) {
	this.stomach.push(mouse);
};

module.exports = Cat;