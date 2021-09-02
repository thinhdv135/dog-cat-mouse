function Mouse(name) {
	this.name = name;
	this.dead = false;
}

Mouse.prototype.die = fucntion() {
	this.dead = true;
}

module.exports = Mouse;