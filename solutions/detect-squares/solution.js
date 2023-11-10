class DetectSquares {
  constructor() {
    this.points = [];
    this.counter = new PointCounter();
  }

  add([x, y]) {
    this.points.push([x, y]);
    this.counter.add([x, y]);
  }

  count([px, py]) {
    let count = 0;

    for (const [x, y] of this.points) {
      if (x === px || y === py) continue;
      if (Math.abs(x - px) !== Math.abs(y - py)) continue;
      count += this.counter.count([px, y]) * this.counter.count([x, py]);
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
