class TimeMap {
  constructor() {
    this.store = {};
  }

  set(key, value, timestamp) {
    if (key in this.store) {
      this.store[key].push([value, timestamp]);
    } else {
      this.store[key] = [[value, timestamp]];
    }
  }

  get(key, timestamp) {
    let res = "";
    const values = this.store[key] || [];
    let l = 0;
    let r = values.length - 1;

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (values[m][1] <= timestamp) {
        res = values[m][0];
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return res;
  }
}

module.exports = { TimeMap };
