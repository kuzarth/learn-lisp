const maxDelta = (xs, ys) => xs.length > 0
  ? Math.max(...xs.map((n, i) => Math.abs(n - ys[i])))
  : 0;

module.exports = maxDelta;
