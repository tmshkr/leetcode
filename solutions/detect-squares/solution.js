class DetectSquares {
  constructor() {
    this.points = [];
    this.counter = new PointCounter();
  }

  add([x, y]) {
    this.points.push([x, y]);
    this.counter.add([x, y]);
  }

  count([x, y]) {
    let count = 0;

    for (const [x2, y2] of this.points) {
      if (x2 === x || y2 === y) continue;
      if (Math.abs(x2 - x) !== Math.abs(y2 - y)) continue;
      count += this.counter.count([x, y2]) * this.counter.count([x2, y]);
    }

    return count;
  }
}

class PointCounter {
  constructor() {
    this.counter = {};
  }

  add([x, y]) {
    this.counter[`${x},${y}`]++ || (this.counter[`${x},${y}`] = 1);
  }

  count([x, y]) {
    return this.counter[`${x},${y}`] || 0;
  }
}

module.exports = { DetectSquares };
