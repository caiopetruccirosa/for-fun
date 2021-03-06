function Cell(x, y) {
	this.x = x;
	this.y = y;
	this.walls = [true, true, true, true];
	this.visited = false;

	this.pickNeighbour = function() {
		var neighbours = [];

		var top;
		if (y != 0)
			top = grid[index(x, y-1)];
		else
			top = grid[index(x, rows-1)];

		var right;
		if (x != cols-1)
			right = grid[index(x+1, y)];
		else
			right = grid[index(0, y)];

		var bottom;
		if (y != rows-1)
			bottom = grid[index(x, y+1)];
		else
			bottom = grid[index(x, 0)];

		var left;
		if (x != 0)
			left = grid[index(x-1, y)];
		else
			left = grid[index(cols-1, y)];

		if (top && !top.visited)
			neighbours.push(top);

		if (right && !right.visited)
			neighbours.push(right);

		if (bottom && !bottom.visited)
			neighbours.push(bottom);

		if (left && !left.visited)
			neighbours.push(left);

		if (neighbours.length > 0) {
			var i = floor(random(0, neighbours.length));
			return neighbours[i];
		} else
			return undefined;
	}

	this.highlight = function() {
		var a = this.x*s;
		var b = this.y*s;
		noStroke();
		fill(0, 255, 0, 200);
		rect(a,b,s,s);
	}

	this.show = function() {
		var a = this.x*s;
		var b = this.y*s;
		stroke(255);

		if (this.walls[0])
			line(a, b, a + s, b);

		if (this.walls[1])
			line(a + s, b, a + s, b + s);

		if (this.walls[2])
			line(a + s, b + s, a, b + s);

		if (this.walls[3])
			line(a, b + s, a, b);

		if (this.visited) {
			noStroke();
			fill(255, 0, 255, 75);
			rect(a, b, s, s);
		}
	}
}
