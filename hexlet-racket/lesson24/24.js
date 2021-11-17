/**
 * skip - returns array without n items
 * @param {number} n  - how many array items should be skipped
 * @param {Array} l  - list to skip n items
 * @returns Array
 */
const skip = (n, l) => {
  if (n <= 0) {
    return l;
  }

  const [head, ...tail] = l;
  return skip(n - 1, tail);
};

module.exports = skip;
